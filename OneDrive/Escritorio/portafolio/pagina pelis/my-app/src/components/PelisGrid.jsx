import { MovieCard } from "./movieCard";
import React from 'react';
import pelis from "./movies.json";
import styles from "./PelisGrid.module.css"

export function PelisGrid(){
    console.log(pelis);
    
    return (
        <ul className={styles.movieGrid}>
            {pelis.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            
        </ul>
    );
}