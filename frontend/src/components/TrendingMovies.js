import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(TRENDING_URL)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: "150px", borderRadius: "10px" }}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;