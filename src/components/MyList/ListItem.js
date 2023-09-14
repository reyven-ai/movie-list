import React from "react";

import classes from "./ListItem.module.css";
import Triangle from "../../asset/triangle.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions/movie";

const ListItem = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isMovieInFavorites = favorites.some(
    (favMovie) => favMovie.id === id.id
  );

  const handleToggleFavorites = () => {
    if (isMovieInFavorites) {
      dispatch(removeFromFavorites(id.id));
    } else {
      dispatch(addToFavorites(id));
    }
  };
  return (
    <div className={classes.card}>
      <li key={id} className={classes.list}>
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            alt={title}
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
    </div>
  );
};

export default ListItem;
