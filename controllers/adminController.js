const Chat = require('../models/chatModel');

exports.updateChat = async (req, res) => {
  try {
    const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(chat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteChat = async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Chat deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update chat by ID
exports.updateChat = async (req, res) => {
    try {
      const chatId = req.params.id; // Capture the ID from the route
      const updatedData = req.body;
  
      const updatedChat = await Chat.findByIdAndUpdate(chatId, updatedData, { new: true });
  
      if (!updatedChat) {
        return res.status(404).json({ error: 'Chat not found' });
      }
  
      res.status(200).json(updatedChat);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Delete chat by ID
exports.deleteChat = async (req, res) => {
    try {
      const chatId = req.params.id; // Capture the ID from the route
  
      const deletedChat = await Chat.findByIdAndDelete(chatId);
  
      if (!deletedChat) {
        return res.status(404).json({ error: 'Chat not found' });
      }
  
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };