import React, { useState, useEffect } from "react";
import Triangle from "../../asset/triangle.png";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import classes from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/movie";

function MovieItem({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  const { ids, titles, poster_paths } = movie;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites); // Assuming you have a favorites state in your Redux store

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

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
      {isLoading ? (
        <div className={classes.cards}>
          <SkeletonTheme color="red" highlightColor="#444">
            <Skeleton height={300} count={4} duration={1} />
          </SkeletonTheme>
        </div>
      ) : (
        <li key={movie.ids} className={classes.item}>
          <Link to={`/movie/${ids}`}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${poster_paths}`}
              alt={titles}
            />
          </Link>
          <div>
            <div className={classes.overview}>
              <div className={classes.btn1}>
                <button>
                  <img src={Triangle} alt="triangle" />
                </button>
              </div>
              <div className={classes.btn2}>
                <button onClick={handleToggleFavorites}>
                  {isMovieInFavorites ? "-" : "+"}
                </button>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default MovieItem;
