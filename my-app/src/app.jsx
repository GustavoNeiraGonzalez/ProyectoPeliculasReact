import style from "./app.module.css";
import styles2 from "./components/empty.module.css"
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";
import { MovieDetails } from "./pages/movieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){ /* si no tiene export no podra ser uswado en el indexjs
    y como en node los modulos son privados se requiere que el modulo/funcion/componente tenga exports */
    return <Router>
        <header>
            <Link to="/">{/* Aqui lo que hace link es ser una etiqueta a (la cual redirige)
                    sin embargo esta no recarga la pagina, solo te cambia los componentes que quieres mostrar */}
                <h1 className={style.title}>Peliculas :D</h1> 
            </Link>

        </header>
        <main>
            <Routes>
                <Route exact path="/movies/:movieId" element={<MovieDetails/>}> {/*utilizando exact haces que
                            solo muestre lo que contiene movie al utilizar el link
                            exacto, sin exact, puedes poner /asdsda y te llevara igual a
                            el path /, tambien puedes poner exact en todas y 
                            si el link es incorrecto poner un 404 not found*/}
                </Route>
                <Route path="/" element={<LandingPage/>}>   
                </Route>
                <Route  path="*" element={<Navigate replace to="/"/>}>
                </Route>
            </Routes>
        </main>
        </Router>;
}