const express = require('express');
const router = express.Router();

// Controller (hozircha test uchun fake)
router.post('/register', (req, res) => {
  res.json({ message: 'Register route ishlayapti' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route ishlayapti' });
});

router.get('/me', (req, res) => {
  res.json({ message: 'Get Me route ishlayapti' });
});

module.exports = router;
