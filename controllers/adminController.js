const Chat = require('../models/chatModel');

// Function to delete a chat by ID
exports.deleteChat = async (req, res) => {
  try {
    const chatId = req.params.id;

    // Validate the ID format
    if (!chatId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid chat ID format' });
    }

    // Delete the chat
    const deletedChat = await Chat.findByIdAndDelete(chatId);

    if (!deletedChat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    res.status(204).send(); // No Content
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid chat ID format' });
    }
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};
