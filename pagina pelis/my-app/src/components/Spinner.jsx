import {FaSpinner} from 'react-icons/fa'
import React from 'react';
import styles from './spinner.module.css'
export function Spinner(){
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60}/>
        </div>
    )
}