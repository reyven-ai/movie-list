import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CastItem.module.css';

function CastItem({ casts }) {
  const { 
    id, 
    name, 
    profile_path
  } = casts;

  const imagePath = profile_path
    ? `https://image.tmdb.org/t/p/w185${profile_path}`
    : 'path_to_default_placeholder_image'; // You can replace this with your own default image path

  return (
    <li key={id} className={classes.item}>
      <Link to={`/cast/${id}`}>
        <img src={imagePath} alt={name} />
        {/* <span>{name}</span> */}
      </Link>
    </li>
  );
}

export default CastItem;
