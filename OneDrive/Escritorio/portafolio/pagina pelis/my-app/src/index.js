import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const divTituloParrafo = (/* ejemplo de entregar un div con datos,
para llamarlo desde el reactDOM.render solo hace falta escribir divTituloParrafo en lugar 
agregarles tambien <> etc */
    <div>
        <h1>Hola desde react</h1>
        <p>texto parrafo desde react</p>
    </div>
);

function Componente(props){/* Tambien se puede utilizar en lugar de props usar {titulo, contenido}
                            Esto hará que puedas utilizar los datos que quieres pasar por su respectivo
                            nombre ya dado en el render */
    /* Las funciones deben empezar en mayusculas o tirará error*/
    console.log(props); /*Props son las variables entregadas en el render, utilizamos console.log solo para 
    visualizarlas en la consola del navegador */

    const contenidoP = props.contenido;/*aqui solo creamos una constante para darla en el parrafo*/

    return(/* utilizando props pasarás las variables donde las necesites */
        <div className="ContenedorTituloP">
            <h1>{props.titulo}</h1> 
            <p>{contenidoP}</p>
        </div>
    );
}
ReactDOM.render(<Componente titulo="Pelis:D" contenido="Hola pelis desde React"/>, document.getElementById("root"));