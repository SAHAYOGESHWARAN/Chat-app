const express = require('express');
const { askQuestion } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware'); // Corrected import

const router = express.Router();

// Use authMiddleware for protecting the route
router.post('/ask', authMiddleware, askQuestion);

module.exports = router;
