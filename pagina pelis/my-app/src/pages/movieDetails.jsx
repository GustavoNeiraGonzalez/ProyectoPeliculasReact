import React from "react"
import movie from "./movie.json";
import styles from "./movieDetails.module.css";

export function MovieDetails(){
    console.log(movie.poster_path)
    console.log(movie.title);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title} />
        assd
        </div>
}