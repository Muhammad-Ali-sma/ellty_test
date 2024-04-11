import React from 'react'
import styles from "../app/page.module.css";

const Button = ({ title = '', handleClick = () => { } }) => {
    return (
        <button className={styles.button} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button