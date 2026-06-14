const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const Donor = require('../models/Donor');
const User = require('../models/User');
const { protect, admin } = require('../middleware/auth');

// @desc    Create a new user complaint about a donor
// @route   POST /api/complaints
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { reportedDonor, reason, description } = req.body;

    if (!reportedDonor || !reason || !description) {
      return res.status(400).json({ success: false, message: 'All report fields are required' });
    }

    // Find the donor to identify the owner user
    const donor = await Donor.findById(reportedDonor);
    if (!donor) {
      return res.status(404).json({ success: false, message: 'Reported donor not found' });
    }

    // Check if reporting yourself
    if (donor.registeredBy.toString() === req.user._id.toString()) {
      return res.status(400).json({ success: false, message: 'You cannot report your own donor profile' });
    }

    // Create complaint
    const complaint = await Complaint.create({
      reportedBy: req.user._id,
      reportedDonor,
      reportedUser: donor.registeredBy,
      reason,
      description,
    });

    res.status(201).json({
      success: true,
      message: 'Complaint submitted successfully. Our team will review this soon.',
      complaint,
    });
  } catch (error) {
    console.error('Create complaint error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get complaints filed against the logged-in user's donor profile
// @route   GET /api/complaints/my-complaints
// @access  Private
router.get('/my-complaints', protect, async (req, res) => {
  try {
    const complaints = await Complaint.find({ reportedUser: req.user._id })
      .select('reason status createdAt')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      complaints,
    });
  } catch (error) {
    console.error('Fetch my complaints error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get complaints submitted by the logged-in user
// @route   GET /api/complaints/my-submitted-complaints
// @access  Private
router.get('/my-submitted-complaints', protect, async (req, res) => {
  try {
    const complaints = await Complaint.find({ reportedBy: req.user._id })
      .populate('reportedDonor', 'fullName')
      .select('reason description status createdAt reportedDonor')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      complaints,
    });
  } catch (error) {
    console.error('Fetch my submitted complaints error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get all complaints
// @route   GET /api/complaints/admin
// @access  Private/Admin
router.get('/admin', protect, admin, async (req, res) => {
  try {
    const complaints = await Complaint.find({})
      .populate('reportedBy', 'fullName email')
      .populate('reportedDonor', 'fullName mobile city state')
      .populate('reportedUser', 'fullName email isBlocked blockedReason')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      complaints,
    });
  } catch (error) {
    console.error('Fetch complaints error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get all users activity data and portal activity statistics
// @route   GET /api/complaints/admin/users/activity
// @access  Private/Admin
router.get('/admin/users/activity', protect, admin, async (req, res) => {
  try {
    const users = await User.find({})
      .select('fullName email role isBlocked registeredAt loginCount lastLoginAt lastActiveAt isOnline')
      .sort({ lastActiveAt: -1 });

    const totalUsers = users.length;
    let totalLogins = 0;
    let onlineNowCount = 0;
    let activeTodayCount = 0;

    const now = new Date();
    const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60 * 1000);
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    users.forEach(u => {
      totalLogins += (u.loginCount || 0);
      
      const lastActive = u.lastActiveAt ? new Date(u.lastActiveAt) : null;
      if (lastActive) {
        if (u.isOnline && lastActive >= fifteenMinutesAgo) {
          onlineNowCount++;
        }
        if (lastActive >= twentyFourHoursAgo) {
          activeTodayCount++;
        }
      }
    });

    res.json({
      success: true,
      stats: {
        totalUsers,
        totalLogins,
        onlineNowCount,
        activeTodayCount,
      },
      users,
    });
  } catch (error) {
    console.error('Fetch user activity error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Update complaint status
// @route   PUT /api/complaints/admin/:id/status
// @access  Private/Admin
router.put('/admin/:id/status', protect, admin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!['pending', 'resolved', 'dismissed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid complaint status' });
    }

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    res.json({
      success: true,
      message: `Complaint marked as ${status}`,
      complaint,
    });
  } catch (error) {
    console.error('Update complaint status error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Restrict or Block/Unblock a user
// @route   PUT /api/complaints/admin/users/:userId/block
// @access  Private/Admin
router.put('/admin/users/:userId/block', protect, admin, async (req, res) => {
  try {
    const { isBlocked, blockedReason } = req.body;

    // Check if trying to block self
    if (req.params.userId === req.user._id.toString()) {
      return res.status(400).json({ success: false, message: 'You cannot block your own admin account' });
    }

    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.isBlocked = isBlocked;
    user.blockedReason = isBlocked ? (blockedReason || 'Terms violation reported by community.') : '';
    await user.save();

    // If blocking user, also update all pending complaints for this user to resolved
    if (isBlocked) {
      await Complaint.updateMany(
        { reportedUser: user._id, status: 'pending' },
        { status: 'resolved' }
      );
    }

    res.json({
      success: true,
      message: `User ${user.fullName} is now ${isBlocked ? 'restricted' : 'active'}`,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        isBlocked: user.isBlocked,
        blockedReason: user.blockedReason,
      },
    });
  } catch (error) {
    console.error('Admin block user error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Submit an appeal for a complaint decision
// @route   PUT /api/complaints/:id/appeal
// @access  Private
router.put('/:id/appeal', protect, async (req, res) => {
  try {
    const { appealMessage } = req.body;

    if (!appealMessage) {
      return res.status(400).json({ success: false, message: 'Appeal message is required' });
    }

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    // Verify ownership and eligibility
    const isReporter = complaint.reportedBy.toString() === req.user._id.toString();
    const isReported = complaint.reportedUser.toString() === req.user._id.toString();

    if (!isReporter && !isReported) {
      return res.status(403).json({ success: false, message: 'Not authorized to appeal this complaint' });
    }

    if (isReporter && complaint.status !== 'dismissed') {
      return res.status(400).json({ success: false, message: 'You can only appeal dismissed complaints' });
    }

    if (isReported && complaint.status !== 'resolved') {
      return res.status(400).json({ success: false, message: 'You can only appeal resolved complaints' });
    }

    complaint.status = 'appealed';
    complaint.appealMessage = appealMessage;
    await complaint.save();

    res.json({
      success: true,
      message: 'Your appeal has been submitted successfully and is under review.',
      complaint,
    });
  } catch (error) {
    console.error('Submit appeal error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
