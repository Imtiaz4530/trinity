const registerUser = async(req,res) => {
    const { name, username, email, password } = req.body;

    try {
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = { name, username, email, password };
        res.status(201).json({ user, message: 'User registered successfully' });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server Error' });
    }
}

const loginUser = async(req,res) => {
        const {username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = { username, email, password };
        res.status(201).json({ user, message: 'User registered successfully' });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {registerUser, loginUser};