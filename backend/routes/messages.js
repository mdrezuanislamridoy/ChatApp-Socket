const express = require('express');
const router = express.Router();
const { getAllMessages } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllMessages);

module.exports = router;
