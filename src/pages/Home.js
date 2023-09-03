import React, { useState, useEffect } from "react";
import MovieList from "../components/Movies/MovieList";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=4ec7576f7d36f7db9a765f2df0a6028e`
        );
        const data = await response.json();
        setFetchedMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar setMovies={setFetchedMovies} />
      <div>
        <div style={{ textAlign: "center", color: "white" }}>
          {isLoading && <p>Loading...</p>}
        </div>
        {!isLoading && fetchedMovies && <MovieList movies={fetchedMovies} />}
      </div>
    </div>
  );
}

export default HomePage;
