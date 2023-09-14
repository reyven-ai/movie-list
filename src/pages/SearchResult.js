import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/Movies/MovieList";
// import TvShowList from '../components/tvshow/TvShowList';

const SearchResults = () => {
  const { query } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const apiKey = "4ec7576f7d36f7db9a765f2df0a6028e";

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const data = await response.json();
        setSearchedMovies(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query, apiKey]);

  return (
    <div>
      <h2>Search results for: {decodeURIComponent(query)}</h2>
      <MovieList movies={searchedMovies} title="" />
    </div>
  );
};

export default SearchResults;
