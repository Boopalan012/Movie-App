import axios from "axios";
import { useEffect, useState } from "react";
import * as Constants from "../Constants/Constants";
import { Cards } from "../Components/Cards";

export const TopRated=()=>{
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            try {
              const response = await axios.get(Constants.TOP_RATED_URL);
              setMovies(response.data.results);
            } catch (error) {
              console.error("Error fetching movies:", error);
            }
          };
          fetchMovies();

        },[]
    );
   

    return(
        <>
        <Cards movies={movies}/>
        </>
    );
}