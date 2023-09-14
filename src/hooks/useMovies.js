import { useState, useEffect } from "react";

const API_KEY = "4ec7576f7d36f7db9a765f2df0a6028e";
const BASE_API_URL = `https://api.themoviedb.org/3/discover`;
const MOVIE_API_URL = `${BASE_API_URL}/movie?api_key=${API_KEY}`;
const TV_SHOW_API_URL = `${BASE_API_URL}/tv?api_key=${API_KEY}`;
const NEW_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const MOVIE_TYPES = {
  movies: "movies",
  tvShow: "tvShow",
  newPopular: "newPopular",
};

function getUrlForMovieType(movieType) {
  if (movieType === MOVIE_TYPES.movies) {
    return MOVIE_API_URL;
  }

  if (movieType === MOVIE_TYPES.tvShow) {
    return TV_SHOW_API_URL;
  }

  if (movieType === MOVIE_TYPES.newPopular) {
    return NEW_POPULAR_URL;
  }

  return undefined;
}

// Alternatively you could use object instead of the getUrlForMovieType function above
// const TYPE_TO_URL_MAP = {
//   [MOVIE_TYPES.movies]: MOVIE_API_URL,
//   [MOVIE_TYPES.tvShow]: TV_SHOW_API_URL,
// };

export const useMovies = ({ type = MOVIE_TYPES.movies }) => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setIsMoviesLoading(true);

      try {
        const apiUrl = getUrlForMovieType(type);

        if (apiUrl === undefined) {
          throw Error("apiUrl is not defined");
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setFetchedMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsMoviesLoading(false);
      }
    }

    fetchMovies();
  }, [type]);

  return {
    fetchedMovies,
    setFetchedMovies,
    isMoviesLoading,
  };
};
