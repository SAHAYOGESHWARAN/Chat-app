const Chat = require('../models/chatModel');

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    // Logic for generating the answer (could be a simple predefined set for now)
    const answer = 'This is a predefined answer';
    
    const chat = await Chat.create({
      question,
      answer,
      user: req.user._id,
    });

    setTimeout(() => {
      res.status(200).json(chat);
    }, 1000); // Responding within 1 second
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
