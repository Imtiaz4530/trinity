require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db/connectDB');
const userRoutes = require('./routes/user.routes');

const app = express();

// Connect to the database
app.use(express.json());
app.use(cors());
connectDB();

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.get("/api/user", userRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});