const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Optional: Check for admin role if needed
    if (req.user.role && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied, admin only' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid', message: error.message });
  }
};

module.exports = authMiddleware;
