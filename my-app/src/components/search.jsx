import React, { useEffect, useState } from 'react';
import styles from "./search.module.css"
import {FcSearch} from "react-icons/fc" 

import { useSearchParams } from 'react-router-dom';
 

export function Search(){
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");


    const handleSubmit = (e) =>{
        e.preventDefault();/*con esto prevenimos que al realizar una busqueda
        se actualize la pagina completa */
    }
    return(
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.Box}>
                <input 
                type="text" 
                className={styles.searchInput} 
                value={search} 
                placeholder="Search the movie"
                aria-label="Search Movies"
                onChange={(e) => {
                    
                    const value = e.target.value;
                    setQuery({search:value})
                    //navigate("/?search=" + value);//aqui hacemos que en el link
                    //se agrege la direccion que queremos para que despues agarrar lo
                    //que venga del search y buscar las coincidencias de pelis
                    //agregando despues de value: , {replace:true}  reemplazariamos
                    //la ruta del historial haciendo que lo que teniamos antes pueda
                    //ser retrocedido 
                }}
                
                />
                <button type="submit" className={styles.searchButton}>
                     <FcSearch className={styles.fondoNo} size={20}/>
                     </button>
            </div>
        </form>
    )
}