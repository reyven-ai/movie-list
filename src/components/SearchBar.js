import React, { useState } from "react";
import classes from './SearchBar.module.css';
import Search from '../asset/searchs.png';
import { useNavigate } from 'react-router-dom'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "4ec7576f7d36f7db9a765f2df0a6028e";

  const navigate = useNavigate(); 

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      const data = await response.json();

      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <button className={classes.search} type="submit">
        <img src={Search} alt="Search" />
      </button>
      <input
        type="text"
        placeholder="Titles, people, genres"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;

