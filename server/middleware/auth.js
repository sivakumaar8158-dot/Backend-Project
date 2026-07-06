const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    try {
      // Get token from header
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, token missing' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token, exclude password
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
      }

      // Update user activity timestamp and online status asynchronously
      User.findByIdAndUpdate(decoded.id, { 
        lastActiveAt: new Date(),
        isOnline: true
      }).catch(err => 
        console.error('Error updating user activity and online status:', err)
      );

      if (req.user.isBlocked) {
        const allowedPaths = [
          '/api/auth/profile',
          '/api/complaints/my-complaints',
          '/api/support/my-messages'
        ];
        const isAppealRoute = 
          req.baseUrl === '/api/complaints' && 
          req.path.endsWith('/appeal') && 
          req.method === 'PUT';
        
        const path = req.originalUrl || (req.baseUrl + req.path);
        const isAllowed = allowedPaths.some(p => path.startsWith(p)) || isAppealRoute;

        if (!isAllowed) {
          return res.status(403).json({ 
            success: false, 
            isBlocked: true, 
            message: 'Your account has been suspended by an admin.' 
          });
        }
      }

      return next();
    } catch (error) {
      console.error('Auth middleware verification error:', error.message);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed or expired' });
    }
  }

  return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ success: false, message: 'Access denied: Admin role required' });
  }
};

module.exports = { protect, admin };
