import { useState, useEffect } from "react";

const API_KEY = "4ec7576f7d36f7db9a765f2df0a6028e";
const BASE_API_URL = `https://api.themoviedb.org/3/movie`;
const SIMILAR_MOVIES_API_URL = `similar`;
const CREDITS_API_URL = `credits`;

export const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `${BASE_API_URL}/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    async function fetchRelatedMovies() {
      try {
        const response = await fetch(
          `${BASE_API_URL}/${id}/${SIMILAR_MOVIES_API_URL}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setRelatedMovies(data.results);
      } catch (error) {
        console.error("Error fetching related movies:", error);
      }
    }

    async function fetchCast() {
      try {
        const response = await fetch(
          `${BASE_API_URL}/${id}/${CREDITS_API_URL}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    }

    async function fetchEpisodes() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/season/1?api_key=4ec7576f7d36f7db9a765f2df0a6028e`
        );
        const data = await response.json();
        setEpisodes(data.episodes);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    }

    // useEffect(() => {
    //   fetchEpisodes();
    // }, [id]);

    fetchMovieDetails();
    fetchRelatedMovies();
    fetchCast();
    fetchEpisodes();
  }, [id]);

  return {
    movie,
    relatedMovies,
    cast,
  };
};
