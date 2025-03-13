import React, { useState } from 'react';

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }} 
        placeholder="Search for a movie..." 
      />
      <button onClick={handleSearch}>Search</button>

      {/* Autocomplete Suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(movie => (
            <li key={movie.id} onClick={() => setQuery(movie.title)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;