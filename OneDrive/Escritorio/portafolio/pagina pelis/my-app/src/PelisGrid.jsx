import pelis from "./movies.json";

export function PelisGrid(){
    console.log(pelis);
    return (
        <ul>
            {pelis.map(function(movie){
                return <li key={movie.id}>{movie.title}</li>
            })}
            
        </ul>
    );
}