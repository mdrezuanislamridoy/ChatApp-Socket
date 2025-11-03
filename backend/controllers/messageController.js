const Message = require('../models/Message');

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { senderId: req.user.id },
                { receiverId: req.user.id }
            ]
        }).sort({ timestamp: 1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
