import React, { useEffect, useState } from 'react';
import styles from "./search.module.css"
import {FcSearch} from "react-icons/fc"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useQuery } from './hooks/useQuery';
 

export function Search(){
    const query = useQuery();
    const search = query.get("search");
    useEffect(() =>{
        setSearchText(search || "");
    },[search])

    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();/*con esto prevenimos que al realizar una busqueda
        se actualize la pagina completa */
        history.push("/?search=" + searchText);//aqui hacemos que en el link
        //se agrege la direccion que queremos para que despues agarrar lo
        //que venga del search y buscar las coincidencias de pelis
    }
    return(
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.Box}>
                <input type="text" className={styles.searchInput} 
                value={searchText } 
                onChange={(e) => setSearchText(e.target.value)}/>
                <button type="submit" className={styles.searchButton}>
                     <FcSearch className={styles.fondoNo} size={20}/>
                     </button>
            </div>
        </form>
    )
}