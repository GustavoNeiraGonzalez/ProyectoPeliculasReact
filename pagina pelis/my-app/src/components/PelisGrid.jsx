import { MovieCard } from "./movieCard";
import React, { useEffect, useState } from 'react';
import styles from "./PelisGrid.module.css"
import { Spinner } from "./Spinner";
import { get } from "../utils/httpclient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./empty";

export function PelisGrid({search}){
    //console.log(pelis);
    //let movies = [];

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    //const movies = moviesState[0];
    //const setMovies = moviesState[1];



    /*para hacer una llamada asincrona en react se usaa useeffect*/
    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page: 
        "/discover/movie?page=" + page;
        /*traduccio dea arriba, si tenemos search se buscara con la url que esta
        entre "" de lo contrario mostrar las peliculas por defecto*/
        get(searchUrl).then((data)=>{
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages)
            setIsLoading(false);
        })
        /*el result es de tipo promesa, para convertir en objeto
        el resultado usamos json */
    }, [search, page])/*Al setear movies hace que se cree un ciclo infinito que repetira 
    el useeffect, para impedirlo al final agregamos un array vacio, [] 
    que indicará que se ejecute solamente una vez al cargar la pagina, en el
    caso de utilizar search se ejecutara cada vez que search cambie de valor*/

    if (movies.length == 0){
        return <Empty/>
    }

    return (
        <InfiniteScroll dataLength={movies.length} 
        hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1) }/*es recomendable
         al actualizar un estado desde un estado anterior, es mejor hacerlo 
         desde una funcion */
         loader={<Spinner/>}>
            <ul className={styles.movieGrid}>
                {movies.map((movie) =>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
                
            </ul>
        </InfiniteScroll>
    );
}