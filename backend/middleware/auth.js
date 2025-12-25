const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  if (email === 'admin@gmail.com' && password === 'admin123') {
    return res.json({
      success: true,
      token: 'dummy-admin-token',
      role: 'admin'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid credentials'
  });
});

module.exports = router;


