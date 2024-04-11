import React from 'react'
import styles from "../app/page.module.css";
import Checkbox from '../components/Checkbox';

const ListItem = ({ title = '', handleCheckboxChange = () => { }, isChecked = false }) => {
    return (
        <div className={styles.list_item}>
            <p className={styles.list_item_text}>{title}</p>
            <Checkbox
                handleChange={handleCheckboxChange}
                isChecked={isChecked}
                name={title}
            />
        </div>
    )
}

export default ListItem