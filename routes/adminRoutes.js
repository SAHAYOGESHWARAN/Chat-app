const express = require('express');
const { updateChat, deleteChat } = require('../controllers/adminController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Middleware to check if the user is an admin

// Define the route to update a chat by ID
router.put('/chat/:id', authMiddleware, updateChat);

// Define the route to delete a chat by ID
router.delete('/chat/:id', authMiddleware, deleteChat);

module.exports = router;
