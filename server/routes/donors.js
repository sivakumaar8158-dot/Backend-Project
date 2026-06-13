const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');
const { protect } = require('../middleware/auth');

// @desc    Register a new donor
// @route   POST /api/donors
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      age,
      gender,
      state,
      district,
      city,
      bloodGroup,
      weight,
    } = req.body;

    // Validate age
    const parsedAge = parseInt(age, 10);
    if (parsedAge < 18 || parsedAge > 65) {
      return res.status(400).json({
        success: false,
        message: 'Ineligible: Age must be between 18 and 65 years.',
      });
    }

    // Check duplicate email or mobile
    const duplicate = await Donor.findOne({
      $or: [
        { mobile: mobile },
        ...(email ? [{ email: email }] : []),
      ],
    });

    if (duplicate) {
      return res.status(400).json({
        success: false,
        message: 'Mobile number or Email is already registered as a donor.',
      });
    }

    // Create donor
    const donor = await Donor.create({
      fullName,
      email,
      mobile,
      age: parsedAge,
      gender,
      state,
      district,
      city,
      bloodGroup,
      weight,
      registeredBy: req.user._id, // Associated with authenticated user
    });

    res.status(201).json({
      success: true,
      message: 'Registration Successful! You are now a donor.',
      donor,
    });
  } catch (error) {
    console.error('Donor register error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get all donors
// @route   GET /api/donors
// @access  Public
router.get('/', async (req, res) => {
  try {
    const User = require('../models/User');
    const blockedUsers = await User.find({ isBlocked: true }).select('_id');
    const blockedUserIds = blockedUsers.map(u => u._id);

    const donors = await Donor.find({ registeredBy: { $nin: blockedUserIds } }).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: donors.length,
      donors,
    });
  } catch (error) {
    console.error('Fetch donors error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
