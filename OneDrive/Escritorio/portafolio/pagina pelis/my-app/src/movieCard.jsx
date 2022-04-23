import styles from "./movieCard.module.css"//Moviendo el css al estilo modulo a traves de styles
//para luego entregarlo en el classname, es decir que  utilizando 
// styles.MovieCard estas llamando al estilo del class .movieCard creado en el css

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    //creando el url de las imagenes con el formato + la informacion de movies.json
    return <li className={styles.movieCard}> 
        <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div>
        </li>; //Se le coloca un key obligatorio para optimizar la lista (de esta forma no renderizas innecesariamente la lista si le haces modificaciones)
}