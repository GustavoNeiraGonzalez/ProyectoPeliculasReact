import { MovieCard } from "./movieCard";
import React, { useEffect, useState } from 'react';
import styles from "./PelisGrid.module.css"
import { Spinner } from "./Spinner";
import { get } from "../utils/httpclient";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "./hooks/useQuery";

export function PelisGrid(){
    //console.log(pelis);
    //let movies = [];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //const movies = moviesState[0];
    //const setMovies = moviesState[1];
    const query = useQuery();
    const search = query.get("search");
    console.log(search)


    /*para hacer una llamada asincrona en react se usaa useeffect*/
    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : 
        "/discover/movie";
        /*traduccio dea arriba, si tenemos search se buscara con la url que esta
        entre "" de lo contrario mostrar las peliculas por defecto*/
        get(searchUrl).then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        })
        /*el result es de tipo promesa, para convertir en objeto
        el resultado usamos json */
    }, [search])/*Al setear movies hace que se cree un ciclo infinito que repetira 
    el useeffect, para impedirlo al final agregamos un array vacio, [] 
    que indicará que se ejecute solamente una vez al cargar la pagina, en el
    caso de utilizar search se ejecutara cada vez que search cambie de valor*/
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