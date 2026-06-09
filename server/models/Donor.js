const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add a full name'],
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, 'Please add a mobile number'],
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Please add an age'],
    min: [18, 'Age must be at least 18'],
    max: [65, 'Age must be at most 65'],
  },
  gender: {
    type: String,
    required: [true, 'Please add a gender'],
    enum: ['male', 'female', 'other'],
  },
  state: {
    type: String,
    required: [true, 'Please add a state'],
    trim: true,
  },
  district: {
    type: String,
    required: [true, 'Please add a district'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'Please add a city'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    required: [true, 'Please add a blood group'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  weight: {
    type: Number,
  },
  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Donor', DonorSchema);
