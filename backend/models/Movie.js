const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    tmdbId: Number,
    posterPath: String,
    overview: String,
    watched: { type: Boolean, default: false }
});

module.exports = mongoose.model('Movie', movieSchema);

