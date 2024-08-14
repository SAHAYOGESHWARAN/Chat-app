const express = require('express');
const { updateChat, deleteChat } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/chat/:id', authMiddleware, updateChat);
router.delete('/chat/:id', authMiddleware, deleteChat);

module.exports = router;
