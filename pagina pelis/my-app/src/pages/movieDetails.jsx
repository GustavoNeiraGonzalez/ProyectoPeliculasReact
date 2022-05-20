import React, { useEffect, useState } from "react"
import {get} from "../utils/httpclient"
import styles from "./movieDetails.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "../components/Spinner";
import placeholder from "../utils/placeholder.jpg"
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails(){
    const { movieId } = useParams()/*con use params obtenemos el especifico 
    id de la pelicula,ya que el id es una variable por cada pelicula entonces
    al tener el id lo utilizaremos para llamar la informacion de la api que
    contenga ese id en especifico*/

    const [movie,setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);/*aqui veremos que
    si la pelicula esta cargando agregarle un efecto de carga */
    console.log(movieId)
    useEffect(() =>{/*aqui hay un get, creado en httpclient.js que significaria una 
        funcion similar a la que existe en el useffect de pelisgrid*/
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId])/*Al darle el movieId hara que al cambiar
    el valor entonces se ejecute el useeffect  */
    if (isLoading){
        return <Spinner/>
    }
    if (!movie){
        return null
    } /*para que no de error de que movie este vació, ya que agarrará
    un valor en el use effect */
    const imageUrl = getMovieImg(movie.poster_path, 500)

    return <div className={styles.detailsContainer}>
        <img className={styles.column + " " + styles.movieImage} 
        src={imageUrl} alt={movie.title} />
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