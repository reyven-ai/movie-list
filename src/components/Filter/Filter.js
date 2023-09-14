import React, { useState } from "react";
import classes from "./Filter.module.css";

function FilterButtons({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={classes.filter}>
      <button
        onClick={() => handleFilterClick("All")}
        className={activeFilter === "All" ? classes.active : ""}
      >
        All
      </button>
      <button
        onClick={() => handleFilterClick("Series")}
        className={activeFilter === "Series" ? classes.active : ""}
      >
        Series
      </button>
      <button
        onClick={() => handleFilterClick("Horror")}
        className={activeFilter === "Horror" ? classes.active : ""}
      >
        Horror
      </button>
      <button
        onClick={() => handleFilterClick("Comedy")}
        className={activeFilter === "Comedy" ? classes.active : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => handleFilterClick("Movies")}
        className={activeFilter === "Movies" ? classes.active : ""}
      >
        Movies
      </button>
      <button
        onClick={() => handleFilterClick("Action")}
        className={activeFilter === "Action" ? classes.active : ""}
      >
        Action
      </button>
    </div>
  );
}

export default FilterButtons;
