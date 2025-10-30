require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db/connectDB');
const userRoutes = require('./routes/user.routes');
const storyRoutes = require('./routes/story.routes');

const app = express();

// Connect to the database
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true,
}));
connectDB();

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.use("/api/user", userRoutes)
app.use("/api/story", storyRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


