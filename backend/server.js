require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });


app.use('/api/movies', require('./routes/movieRoutes'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});