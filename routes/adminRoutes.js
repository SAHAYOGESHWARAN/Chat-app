const express = require('express');
const { updateChat, deleteChat } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.put('/chat/:id', protect, admin, updateChat);
router.delete('/chat/:id', protect, admin, deleteChat);

module.exports = router;
