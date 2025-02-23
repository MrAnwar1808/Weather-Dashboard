import React, { useState } from 'react';

const WeatherSearch = ({ setCity }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setCity(search);
      setSearch('');
    }
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default WeatherSearch;
