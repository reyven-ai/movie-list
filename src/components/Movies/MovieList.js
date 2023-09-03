import React from "react";
import classes from "./MovieList.module.css";
import { Carousel } from "react-responsive-carousel";
import MovieItem from "./MovieItem";

function MovieList({ movies, title = "What do you want to watch today" }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className={classes.list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
