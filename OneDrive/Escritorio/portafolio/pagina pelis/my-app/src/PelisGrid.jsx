import { MovieCard } from "./movieCard";
import pelis from "./movies.json";

export function PelisGrid(){
    console.log(pelis);
    
    return (
        <ul>
            {pelis.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            
        </ul>
    );
}