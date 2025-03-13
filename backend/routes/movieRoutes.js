const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Add a movie to the watchlist
router.post('/add', async (req, res) => {
    try {
        const { title, tmdbId, posterPath, overview } = req.body;
        
        // Check if movie already exists
        const existingMovie = await Movie.findOne({ tmdbId });
        if (existingMovie) return res.status(400).json({ message: "Movie already in watchlist" });

        const newMovie = new Movie({ title, tmdbId, posterPath, overview });
        await newMovie.save();
        res.json(newMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all movies in the watchlist
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove a movie from the watchlist
router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie removed from watchlist" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

