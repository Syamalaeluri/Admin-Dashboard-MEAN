const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Login request:', email, password);

  
  if (email === 'admin@gmail.com' && password === 'admin123') {
    return res.status(200).json({
      token: 'dummy-token-123',
      role: 'admin'
    });
  }

  return res.status(401).json({
    message: 'Invalid credentials'
  });
});

module.exports = router;
