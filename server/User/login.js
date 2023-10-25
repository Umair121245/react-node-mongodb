const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

module.exports = function () {

  router.post('/loginUser', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      // You can consider implementing JWT or session-based authentication here
      // For simplicity, we'll just send a success message for now
      return res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  

return router;
};
