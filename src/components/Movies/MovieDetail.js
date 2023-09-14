import { Link, useParams } from "react-router-dom";
import MovieList from "../Movies/MovieList";
// import Episode from "../cast/Episode";

import Triangle from "../../asset/triangle.png";
import Close from "../../asset/close.png";

import classes from "./MovieDetail.module.css";
import CastList from "../cast/CastList";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/movie";
import { useMovieDetails } from "../../hooks/useMovieDetails";

function MovieDetail() {
  const { id } = useParams();
  const { movie, relatedMovies, cast } = useMovieDetails(id); // Use the custom hook
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!cast) {
    return <div>Loading cast details...</div>;
  }

  const isMovieInFavorites = favorites.some(
    (favMovie) => favMovie.id === movie.id
  );

  const handleToggleFavorites = () => {
    if (isMovieInFavorites) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <>
      <div className={classes.background}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
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
            <li>Release Date: {movie.release_date}</li>
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
              <button onClick={handleToggleFavorites}>
                {isMovieInFavorites ? "-" : "+"}
              </button>
            </div>
          </div>
          {/* <div className={classes.cast}>
            <CastList casts={cast} />
          </div> */}
        </div>
      </div>
      <div className={classes.cast}>
        <CastList casts={cast} />
      </div>
      <div className={classes.related}>
        <MovieList movies={relatedMovies} title="More Like This" />
        {/* <Episode episodes={id} /> */}
      </div>
    </>
  );
}

export default MovieDetail;
