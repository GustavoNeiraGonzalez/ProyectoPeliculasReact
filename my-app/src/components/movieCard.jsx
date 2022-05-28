import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieImg } from '../utils/getMovieImg';
import placeholder from "../utils/placeholder.jpg"
import styles from "./movieCard.module.css"//Moviendo el css al estilo modulo a traves de styles
//para luego entregarlo en el classname, es decir que  utilizando 
// styles.MovieCard estas llamando al estilo del class .movieCard creado en el css

export function MovieCard({movie}){
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return <li className={styles.movieCard}> 
        <Link to={"/movies/"+movie.id}>
            <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </Link>
        </li>; //Se le coloca un key obligatorio para optimizar la lista (de esta forma no renderizas innecesariamente la lista si le haces modificaciones)
}