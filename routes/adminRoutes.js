const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/admin/chat/:id', authMiddleware, (req, res) => {
  // Handle the update chat logic here
});

router.delete('/admin/chat/:id', authMiddleware, (req, res) => {
  // Handle the delete chat logic here
});

module.exports = router;
