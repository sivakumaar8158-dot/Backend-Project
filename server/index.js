const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Seed Default Admin User
const seedAdmin = async () => {
  try {
    const User = require('./models/User');
    const bcrypt = require('bcryptjs');

    const adminEmail = 'admin@findyourdonor.com';
    const adminUser = await User.findOne({ email: adminEmail });

    if (!adminUser) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123456', salt);

      await User.create({
        fullName: 'System Administrator',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
      });
      console.log('====================================================');
      console.log('DEFAULT ADMIN SEEDED successfully!');
      console.log('Email: admin@findyourdonor.com');
      console.log('Password: admin123456');
      console.log('====================================================');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
};

mongoose.connection.once('open', () => {
  seedAdmin();
});

const app = express();

// Standard Middlewares
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'http://localhost:4173'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.some(allowed => {
      if (allowed === '*') return true;
      return allowed.trim().toLowerCase() === origin.trim().toLowerCase();
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json()); // Body parser

// Route Definitions
app.use('/api/auth', require('./routes/auth'));
app.use('/api/donors', require('./routes/donors'));
app.use('/api/complaints', require('./routes/complaints'));

// Root Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Find Your Donor API' });
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});
