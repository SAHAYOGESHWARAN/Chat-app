const express = require('express');
const { register, login } = require('../controllers/userController'); // Ensure correct import
const router = express.Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

module.exports = router;
