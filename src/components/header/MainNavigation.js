import { NavLink, useLocation } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const location = useLocation();

  return (
    <header
      className={`${classes.header} ${
        location.pathname === "/" ? classes.background : ""
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
          {/* <li>
            <NavLink
              to="/tvhow"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New & Popular
            </NavLink>
          </li> */}
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
      <div>
        <ul className={classes.authentication}>
          {/* <SearchBar onSearch={onSearch} /> */}
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
