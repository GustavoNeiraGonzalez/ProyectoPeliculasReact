import { PelisGrid } from "./PelisGrid";

export function App(){ /* si no tiene export no podra ser uswado en el indexjs
    y como en node los modulos son privados se requiere que el modulo/funcion/componente tenga exports */
    return <div className="ContenedorTituloP">
        <header>
            <h1>Peliculas :D</h1>
        </header>
        <main>
            <PelisGrid></PelisGrid>
        </main>
        </div>;
}