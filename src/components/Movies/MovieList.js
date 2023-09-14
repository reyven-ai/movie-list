import React from "react";
import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem";
// import Filter from "../Filter/Filter";

function MovieList({ movies, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {/* <Filter /> */}
      <ul className={classes.list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
