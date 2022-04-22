
export function MovieCard({movie}){
    return <li>{movie.title}</li>; //Se le coloca un key obligatorio para optimizar la lista (de esta forma no renderizas innecesariamente la lista si le haces modificaciones)
}