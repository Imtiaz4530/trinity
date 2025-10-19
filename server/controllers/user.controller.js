const User = require('../models/user.model');

const registerUser = async(req,res) => {
    const { name, username, email, password, confirmPassword } = req.body;

    try {
        if (!name || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const existingUser = await User.findOne({ $or: [ { email }, { username } ] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with given email or username already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: `Passwords doesn't match` });
        }

        const userData = { name, username, email, password };

        const user = await User.create(userData);
        res.status(201).json({ user, message: 'User registered successfully' });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server Error' });
    }
}

const loginUser = async(req,res) => {
        const {username, email, password } = req.body;

    try {
        if ((!username && !email) || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ $or: [ { email }, { username } ] });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const userData = { username, email, password };
        res.status(201).json({ userData, message: 'User logged in successfully' });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {registerUser, loginUser};