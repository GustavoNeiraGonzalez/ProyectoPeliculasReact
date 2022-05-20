import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from "../utils/placeholder.jpg"
import styles from "./movieCard.module.css"//Moviendo el css al estilo modulo a traves de styles
//para luego entregarlo en el classname, es decir que  utilizando 
// styles.MovieCard estas llamando al estilo del class .movieCard creado en el css

export function MovieCard({movie}){
    const imageUrl = movie.poster_path!=null ? 
    "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
    /*significado: si existe un movie.poster_path entonces retorna el link mas
    el posterpath, si no, la imagen por defecto de que no hay imagen(placeholder) */
    return <li className={styles.movieCard}> 
        <Link to={"/movies/"+movie.id}>
            <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </Link>
        </li>; //Se le coloca un key obligatorio para optimizar la lista (de esta forma no renderizas innecesariamente la lista si le haces modificaciones)
}