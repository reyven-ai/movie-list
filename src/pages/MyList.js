import React from "react";
import { useSelector } from "react-redux";

import ListItem from "../components/MyList/ListItem";
import classes from "../components/MyList/ListItem.module.css";
import Card from "../components/UI/Card";

const Favorites = (props) => {
  const favoriteMovies = useSelector((state) => state.favorites);

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteMovies.length > 0) {
    content = (
      <Card>
        <h2>My List</h2>
        <ul className={classes.list}>
          {favoriteMovies.map((mov) => (
            <ListItem
              key={mov.id}
              id={mov.id}
              title={mov.title}
              poster_path={mov.poster_path}
            />
          ))}
        </ul>
      </Card>
    );
  }
  return content;
};

export default Favorites;
