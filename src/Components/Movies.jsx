import axios from "axios";
import { useState, useEffect } from "react";
import * as Constants from "./Constants";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Icon,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import styles from "../styles.module.css";
import { green } from "@mui/material/colors";

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
  console.log("movies", movies);

  return (
    <>
      <h1>Header</h1>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Card key={movie.id} className={styles.card}>
            <CardHeader
              className={styles.cardHeader}
              avatar={
                <Avatar className={styles.avatar}>{movie.vote_average}</Avatar>
              }
              title={
                <span className={styles.cardHeaderTitle}>
                  {movie.original_title}
                </span>
              }
              subheader={
                <span className={styles.cardHeaderSubheader}>
                  {movie.release_date}
                </span>
              }
              action={
                <IconButton
                  className={styles.iconButton}
                  color="error"
                  aria-label="icon button"
                >
                  <Icon className={styles.icon}>add_circle</Icon>
                </IconButton>
              }
            />

            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.cardImage}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview}
              </Typography>
              <Rating
                name="movie-rating"
                value={movie.vote_average / 2}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Movies;
