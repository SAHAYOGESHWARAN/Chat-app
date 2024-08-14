const Chat = require('../models/chatModel');

exports.updateChat = async (req, res) => {
    try {
      const chatId = req.params.id;
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


