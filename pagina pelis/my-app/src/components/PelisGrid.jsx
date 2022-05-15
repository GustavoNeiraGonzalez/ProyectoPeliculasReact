import { MovieCard } from "./movieCard";
import React, { useEffect, useState } from 'react';
import styles from "./PelisGrid.module.css"

export function PelisGrid(){
    //console.log(pelis);
    //let movies = [];
    const [movies, setMovies] = useState([]);

    //const movies = moviesState[0];
    //const setMovies = moviesState[1];
  
    /*para hacer una llamada asincrona en react se usaa useeffect*/
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODM0MGQ0ODlhMWU0ZWIzYzliMDQ0YTEyOWIyMjQxYiIsInN1YiI6IjYyNzMzYWM3N2NmZmRhNzMxNmM1ZGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.st8ZVrVOOCBDafo04RUOKIxXfy04XsHMB0DRVYAC0U0",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then((data) =>{
            setMovies(data.results)
        })
        /*el result es de tipo promesa, para convertir en objeto
        el resultado usamos json */
    }, [])/*Al setear movies hace que se cree un ciclo infinito que repetira 
    el useeffect, para impedirlo al final agregamos un array vacio, [] 
    que indicará que se ejecute solamente una vez al cargar la pagina*/
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            
        </ul>
    );
}