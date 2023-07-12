import axios from "axios";
import { useState, useEffect } from "react";
import * as Constants from "./Constants";
import { Cards } from "./Cards";
import { Headers } from "./Headers";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(Constants.POPULAR_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Headers/>

      <Cards movies={movies} />
    </>
  );
};

export default Movies;
