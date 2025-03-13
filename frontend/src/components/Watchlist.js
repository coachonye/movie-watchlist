import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = "http://localhost:5001/api/movies";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL)
      .then(res => setWatchlist(res.data))
      .catch(err => console.error(err));
  }, []);

  const removeFromWatchlist = (movieId) => {
    axios.delete(`${BACKEND_URL}/${movieId}`)
      .then(() => {
        setWatchlist(watchlist.filter(movie => movie._id !== movieId));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>My Watchlist</h2>
      <div className="movies-container">
        {watchlist.length === 0 ? <p>No movies added yet.</p> : 
          watchlist.map(movie => (
            <div key={movie._id} className="movie-card">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} 
                alt={movie.title} 
              />
              <p>{movie.title}</p>
              <button onClick={() => removeFromWatchlist(movie._id)}>Remove</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;