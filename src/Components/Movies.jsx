import axios from "axios";
import { useState, useEffect } from "react";
import * as Constants from "./Constants";
import { Card, CardMedia } from '@mui/material';


export const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(Constants.POPULAR_URL);
        console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    console.log(Constants.POPULAR_URL);
    console.log('movies',movies);

    fetchMovies();
  }, []);

  return(
    <>
    Header
    <Card>
      <CardMedia title="" image="" />

    </Card>
    </>
  )
};
