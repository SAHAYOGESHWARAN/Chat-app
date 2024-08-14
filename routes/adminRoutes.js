const express = require('express');
const { updateChat, deleteChat } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// PUT route to update a chat by ID
router.put('/chat/:id', authMiddleware, updateChat);

// DELETE route to delete a chat by ID (not covered in detail here, but assuming it exists)
router.delete('/chat/:id', authMiddleware, deleteChat);

module.exports = router;
