import React, { useState } from "react";
import MovieList from "../components/Movies/MovieList";
import { MOVIE_TYPES, useMovies } from "../hooks/useMovies";

function NewPopularPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    MOVIE_TYPES.newPopular
  );

  const { fetchedMovies, setFetchedMovies, isMoviesLoading } = useMovies({
    type: selectedCategory, // Pass the selected category as the type
  });

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case MOVIE_TYPES.movies:
        return "";
      case MOVIE_TYPES.tvShow:
        return "TV Shows";
      case MOVIE_TYPES.newPopular:
        return "New & Popular";
      default:
        return "Unknown Category";
    }
  };

  return (
    <div>
      <div>
        {isMoviesLoading && (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>Loading...</p>
          </div>
        )}

        {!isMoviesLoading && fetchedMovies && (
          <MovieList
            movies={fetchedMovies}
            title={getCategoryTitle()} // Pass the category title as a prop
          />
        )}
      </div>
    </div>
  );
}

export default NewPopularPage;
