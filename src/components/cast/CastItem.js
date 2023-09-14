import React from "react";
import { Link } from "react-router-dom";

import classes from "./CastItem.module.css";

function CastItem({ casts }) {
  const { id, name, profile_path } = casts;

  const imagePath = profile_path
    ? `https://image.tmdb.org/t/p/w185${profile_path}`
    : "path_to_default_placeholder_image"; // You can replace this with your own default image path

  return (
    <li key={id} className={classes.item}>
      <Link to={`/cast/${id}`}>
        <div>
          <img src={imagePath} alt={name} />
        </div>
        <div className={classes.castname}>
          <span>{name}</span>
        </div>
      </Link>
    </li>
  );
}

export default CastItem;
