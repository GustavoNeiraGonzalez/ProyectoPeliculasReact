import React, { useEffect, useState } from "react"
import {get} from "../utils/httpclient"
import styles from "./movieDetails.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function MovieDetails(){
    const { movieId } = useParams()
    const [movie,setMovie] = useState(null);
    
    console.log(movieId)
    useEffect(() =>{
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
        })
    }, [movieId])/*Al darle el movieId hara que al cambiar
    el valor entonces se ejecute el useeffect  */

    if (!movie){
        return null
    } /*para que no de error de que movie este vació, ya que agarrará
    un valor en el use effect */
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return <div className={styles.detailsContainer}>
        <img className={styles.column + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={`${styles.column} ${styles.movieDetails}`}>
            <p className={styles.padding2parrafos}>
                <strong>Title: </strong> {movie.title} 
            </p>
            <p className={`${styles.padding2parrafos} ${styles.firstItem}`}>
                <strong>Generos: </strong>
                {movie.genres.map(genre => genre.name).join(", ")}
                {/*Importante, aqui hay otro tipos de datos guardados, el arreglo
                que contiene objetos ej; genres:[{id:3, name:"asd"},{id:2, name:"terror"}]
                 un arreglo(arry) normal es de esta forma ej: array:{saludo:"ola",pregunta:"quetal"}
                 entonces para convertir el genero en string ya que queremos mostrar 
                 los 2 generos que tiene la pelicula, utilizamos map y para que no esten
                 pegados los generos ej: accionaventura, utilizamos join(", ") asi se 
                 separaria por coma y espacio*/}

            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
        </div>
}