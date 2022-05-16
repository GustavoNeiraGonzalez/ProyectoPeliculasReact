import { MovieCard } from "./movieCard";
import React, { useEffect, useState } from 'react';
import styles from "./PelisGrid.module.css"
import { Spinner } from "./Spinner";
import { get } from "../utils/httpclient";

export function PelisGrid(){
    //console.log(pelis);
    //let movies = [];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //const movies = moviesState[0];
    //const setMovies = moviesState[1];
  
    /*para hacer una llamada asincrona en react se usaa useeffect*/
    useEffect(()=>{
        setIsLoading(true);
        get("/discover/movie").then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        })
        /*el result es de tipo promesa, para convertir en objeto
        el resultado usamos json */
    }, [])/*Al setear movies hace que se cree un ciclo infinito que repetira 
    el useeffect, para impedirlo al final agregamos un array vacio, [] 
    que indicará que se ejecute solamente una vez al cargar la pagina*/
    if(isLoading){
        return <Spinner/>;
    }
    
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            
        </ul>
    );
}