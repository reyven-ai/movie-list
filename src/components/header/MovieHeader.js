import React, { useState } from "react";
import classes from "./MovieHeader.module.css";
import Search from "../../asset/searchs.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "4ec7576f7d36f7db9a765f2df0a6028e";

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      const data = await response.json();

      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <header
        className={`${classes.header} 
        // location.pathname === "/" ? classes.background : ""
      }`}
      >
        <nav className={classes.navLink}>
          <div className={classes.logo}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Hello
            </NavLink>
          </div>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv-show"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                TV Shows
              </NavLink>
            </li>
            {/* {/* <li>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Series
            </NavLink>
          </li> */}
            <li>
              <NavLink
                to="/newPopular"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New & Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mylist"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                My List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/language"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Browse by Language
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <SearchBar /> */}
        <div className={classes.handle}>
          <form onSubmit={handleSearch}>
            <button className={classes.search} type="submit">
              <img src={Search} alt="Search" />
            </button>
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <div className={classes.authentication}>
            <div>Log in</div>
            <div>Sign up</div>
          </div>
        </div>
      </header>
      {/* ); */}
    </>
  );
};

export default SearchBar;

// https://api.themoviedb.org/3/discover

// // https://api.themoviedb.org/3/search/movie?
