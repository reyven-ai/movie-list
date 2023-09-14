import React from "react";
import CastItem from "./CastItem"; // Import your CastItem component

import classes from "./CastList.module.css";

function CastList({ casts }) {
  return (
    <>
      <h4>Top Billed Cast</h4>
      <div className={classes.container}>
        <ul className={classes.list}>
          {casts.map((cast) => (
            <CastItem key={cast.id} casts={cast} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default CastList;
