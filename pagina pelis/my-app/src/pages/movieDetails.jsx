import React from "react"
import movie from "./movie.json";
import styles from "./movieDetails.module.css";

export function MovieDetails(){
    console.log(movie.poster_path)
    console.log(movie.title);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title} />
        <div>
            <p>
                <strong>Title:</strong> {movie.title} 
            </p>
            <p>
                {movie.genres.map(genre => genre.name)}
                {/*Importante, aqui hay otro tipos de datos guardados, el arreglo
                que contiene objetos ej; genres:[id:3, name:"asd"],[id:2, name:"terror"]
                 un arreglo(arry) normal es de esta forma ej: array:["ola","quetal"]
                 entonces para recorrer varias veces el genero, ya que queremos mostrar 
                 los 2 generos que tiene la pelicula, utilizamos map*/}

            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
        </div>
}