import React from 'react'
import styles from "../app/page.module.css";

const Checkbox = ({ isChecked = false, handleChange = () => { }, name = '' }) => (
    <label className={styles.checkbox_container}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} name={name}/>
        <span className={styles.checkmark}></span>
    </label>
);
export default Checkbox