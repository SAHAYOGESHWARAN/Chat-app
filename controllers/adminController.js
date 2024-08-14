const Chat = require('../models/chatModel');

// Function to update a chat by ID
exports.updateChat = async (req, res) => {
  try {
    const chatId = req.params.id; // Capture the ID from the route
    const updatedData = req.body;

    // Validate the ID format (optional, but useful)
    if (!chatId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid chat ID format' });
    }

    // Ensure that there's data to update
    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({ error: 'No data provided for update' });
    }

    // Find the chat by ID and update it with the new data
    const updatedChat = await Chat.findByIdAndUpdate(chatId, updatedData, { new: true });

    // If no chat was found with the provided ID
    if (!updatedChat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    // Return the updated chat
    res.status(200).json(updatedChat);
  } catch (error) {
    // Check if the error is related to MongoDB or Mongoose
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid chat ID format' });
    }
    
    // General server error
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

// Function to delete a chat by ID (implement this function if needed)
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

    // Return a success response
    res.status(204).send(); // No Content
  } catch (error) {
    // Check if the error is related to MongoDB or Mongoose
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).json({ error: 'Invalid chat ID format' });
    }

    // General server error
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

// module.exports = {
//   updateChat,
//   deleteChat,
//   // Export other functions if needed
// };
