const express = require('express');
const db = require('../db'); // Import the database configuration file

const router = express.Router();

// Define a MongoDB model for your data (e.g., a User model)
const User = db.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    // Add more fields as needed
});

// Route to handle updating user data by ID
router.put('/updateUserData/:id', async (req, res) => {
    const { id } = req.params; // Get the user ID from the request parameters
    const { firstName, lastName, email } = req.body; // Updated data

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
        });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User data updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating user data' });
    }
});

module.exports = router;
