import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MovieList from "../Movies/MovieList";
import { Carousel } from "react-responsive-carousel";

import Triangle from "../../asset/triangle.png";
import Close from "../../asset/close.png";

import classes from "./MovieDetail.module.css";
import CastList from "../cast/CastList";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4ec7576f7d36f7db9a765f2df0a6028e`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    async function fetchRelatedMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4ec7576f7d36f7db9a765f2df0a6028e`
        );
        const data = await response.json();
        setRelatedMovies(data.results);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    }
    async function fetchCast() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4ec7576f7d36f7db9a765f2df0a6028e`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    }
    // }

    fetchMovieDetails();
    fetchRelatedMovies();
    fetchCast();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!cast) {
    return <div>Loading cast details...</div>;
  }

  return (
    <>
      <div className={classes.close}>
        <Link to="..">
          <img src={Close} alt="close"></img>{" "}
        </Link>
      </div>
      <div className={classes.detail}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <ul className={classes.info}>
            <li>Popularity: {movie.popularity}</li>
            <li>Release Date: {movie.ç}</li>
            <li>Original Language: {movie.original_language}</li>
            <li>{movie.director}</li>
          </ul>
          <div className={classes.btn}>
            <div className={classes.btn1}>
              <button>
                <img src={Triangle} alt="tiangle" /> Watch Now
              </button>
            </div>
            <div className={classes.btn2}>
              <button>+</button>
            </div>
          </div>
          <div className={classes.cast}>
            <CastList casts={cast} />
          </div>
        </div>
      </div>
      <div className={classes.related}>
        <MovieList movies={relatedMovies} title="Related Movies" />
      </div>
    </>
  );
}

export default MovieDetail;
