import { Avatar, Card, CardContent, CardHeader, CardMedia, Icon, IconButton, Rating, Typography } from "@mui/material";
import styles from "../styles.module.css";
import * as Constants from "../Constants/Constants";


export const Cards=(props)=>{
    const movies=props.movies;
    return(
        <>
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
              image={`${Constants.IMAGE_SRC}${movie.poster_path}`}
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
}