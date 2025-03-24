import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrendingMovies from './components/TrendingMovies';
import SearchBar from './components/SearchBar';
import Watchlist from './components/Watchlist';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BACKEND_URL = "http://localhost:10000/api/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setMovies([]);
      setSuggestions([]);
      return;
    }

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => {
        setMovies(res.data.results);
        setSuggestions(res.data.results.slice(0, 5));
      })
      .catch(err => console.error(err));
  };

  
  const addToWatchlist = (movie) => {
    axios.post(`${BACKEND_URL}/add`, {
      title: movie.title,
      tmdbId: movie.id,
      posterPath: movie.poster_path,
      overview: movie.overview
    })
    .then(() => alert(`${movie.title} added to Watchlist!`))
    .catch(err => alert("Movie is already in Watchlist or an error occurred."));
  };

  
  const fetchMovieTrailer = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
      .then(res => {
        const trailers = res.data.results;
        if (trailers.length > 0) {
          const trailerKey = trailers[0].key;
          window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
        } else {
          alert("No trailer available for this movie.");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <Router>
      {}
      <nav>
        <Link to="/">Home</Link> | <Link to="/watchlist">My Watchlist</Link>
      </nav>

      <Routes>
        {}
        <Route path="/" element={
          <div>
            <h1>Movie Watchlist</h1>
            <SearchBar onSearch={handleSearch} suggestions={suggestions} />
            <TrendingMovies />

            <h2>Search Results</h2>
            <div className="movies-container">
              {movies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                  />
                  <h3>{movie.title}</h3>
                  <p><strong>Rating:</strong> ⭐ {movie.vote_average}/10</p>
                  <p><strong>Release Date:</strong> {movie.release_date}</p>
                  <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
                  <button onClick={() => fetchMovieTrailer(movie.id)}>🎬 Watch Trailer</button>
                </div>
              ))}
            </div>
          </div>
        } />

        {/* Watchlist Page */}
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
}

export default App;


