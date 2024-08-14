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
