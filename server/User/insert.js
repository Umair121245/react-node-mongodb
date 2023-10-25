const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');


module.exports = function () {
    // Route to handle incoming form data
    router.post('/submitFormData', async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        const saltRounds = 10;
    
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            console.log('Hashed Password:', hashedPassword);
    
            // Create a new User document and save it to the database
            const newUser = new User({ firstName, lastName, email, password: hashedPassword });
            await newUser.save();
    
            res.status(200).json({ message: 'Data saved successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error saving data' });
        }
    });
    
    

    return router;
};
