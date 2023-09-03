import React, { useState, useEffect } from "react";
import Triangle from "../../asset/triangle.png";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import classes from "./MovieItem.module.css";

function MovieItem({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  const { id, title, poster_path } = movie;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={classes.cards}>
          <SkeletonTheme color="red" highlightColor="#444">
            <Skeleton height={300} count={4} duration={1} />
          </SkeletonTheme>
        </div>
      ) : (
        <li key={movie.id} className={classes.item}>
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
                  <img src={Triangle} alt="tiangle" />
                </button>
              </div>
              <div className={classes.btn2}>
                <button>+</button>
                {/* <button>+</button> */}
              </div>
            </div>
          </div>
        </li>
      )}
    </>
    //{" "}
  );
}

export default MovieItem;
