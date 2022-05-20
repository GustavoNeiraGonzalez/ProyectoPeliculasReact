import placeholder from "../utils/placeholder.jpg"

export function getMovieImg(path, width){
    return path ? 
    `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
    /*significado: si existe un movie.poster_path entonces retorna el link mas
    el posterpath, si no, la imagen por defecto de que no hay imagen(placeholder)
   
    truco: para poner las comillas invertidas y la sintaxis mas rapida si estuviera
    en .../w + width + path solo lo seleccionas todo presionas control + . entonces
    le das a convertir en template string */
}