import { PelisGrid } from "./components/PelisGrid";
import style from "./app.module.css";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function App(){ /* si no tiene export no podra ser uswado en el indexjs
    y como en node los modulos son privados se requiere que el modulo/funcion/componente tenga exports */
    return <Router>
        <header>
            <h1 className={style.title}>Peliculas :D</h1>
        </header>
        <main>
            <Switch>
                <Route path="/movie">
                    Movie
                </Route>
                <Route path="/">
                    Home
                </Route>
            </Switch>
            <PelisGrid></PelisGrid>
        </main>
        </Router>;
}