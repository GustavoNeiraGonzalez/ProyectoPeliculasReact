import React from "react"
import movie from "./movie.json";
import styles from "./movieDetails.module.css";

export function MovieDetails(){
    console.log(movie.poster_path)
    console.log(movie.title);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img className={styles.column + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={`${styles.column} ${styles.movieDetails}`}>
            <p className={styles.padding2parrafos}>
                <strong>Title: </strong> {movie.title} 
            </p>
            <p className={styles.padding2parrafos}>
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