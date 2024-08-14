const Chat = require('../models/chatModel');

// Function to handle asking a question
exports.askQuestion = async (req, res) => {
  try {
    // Ensure that the request body contains the question
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Simulate generating an answer (could be more complex based on your use case)
    const answer = 'This is a predefined answer';

    // Ensure req.user is defined (typically set by authentication middleware)
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Create a new chat entry
    const chat = await Chat.create({
      question,
      answer,
      user: req.user._id, // Assuming user is authenticated and req.user._id is available
    });

    // Simulate processing time
    setTimeout(() => {
      res.status(200).json(chat);
    }, 1000); // Responding within 1 second

  } catch (error) {
    // Handle different types of errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};
