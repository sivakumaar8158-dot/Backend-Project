const express = require('express');
const router = express.Router();
const SupportMessage = require('../models/SupportMessage');
const { protect, admin } = require('../middleware/auth');

// @desc    Submit a support message
// @route   POST /api/support
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newMessage = await SupportMessage.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: newMessage,
    });
  } catch (error) {
    console.error('Submit support message error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get all support messages
// @route   GET /api/support/messages
// @access  Private/Admin
router.get('/messages', protect, admin, async (req, res) => {
  try {
    const messages = await SupportMessage.find({}).sort({ createdAt: -1 });
    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error('Fetch support messages error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Delete a support message
// @route   DELETE /api/support/messages/:id
// @access  Private/Admin
router.delete('/messages/:id', protect, admin, async (req, res) => {
  try {
    const message = await SupportMessage.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Delete support message error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Get current user's support messages
// @route   GET /api/support/my-messages
// @access  Private
router.get('/my-messages', protect, async (req, res) => {
  try {
    console.log('--- GET /my-messages ---');
    console.log('Authenticated User Email:', req.user.email);
    const messages = await SupportMessage.find({ 
      email: { $regex: new RegExp(`^${req.user.email.trim()}$`, 'i') } 
    }).sort({ createdAt: -1 });
    console.log('Found messages matching email:', messages);
    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error('Fetch my support messages error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Mark a reply as read by user
// @route   PUT /api/support/my-messages/:id/read
// @access  Private
router.put('/my-messages/:id/read', protect, async (req, res) => {
  try {
    const message = await SupportMessage.findOne({ _id: req.params.id, email: req.user.email });
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found or unauthorized' });
    }

    message.isReadByClient = true;
    await message.save();

    res.json({
      success: true,
      message: 'Marked reply as read successfully',
    });
  } catch (error) {
    console.error('Mark read error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @desc    Reply to a support message
// @route   PUT /api/support/messages/:id/reply
// @access  Private/Admin
router.put('/messages/:id/reply', protect, admin, async (req, res) => {
  try {
    const { replyMessage } = req.body;
    if (!replyMessage) {
      return res.status(400).json({ success: false, message: 'Reply message is required' });
    }

    const message = await SupportMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    message.replyMessage = replyMessage;
    message.repliedAt = new Date();
    message.status = 'replied';
    message.isReadByClient = false;
    await message.save();

    res.json({
      success: true,
      message: 'Reply sent successfully',
      data: message,
    });
  } catch (error) {
    console.error('Reply support message error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
