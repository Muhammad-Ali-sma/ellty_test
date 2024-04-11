'use client'

import React, { useState } from 'react';
import styles from "../app/page.module.css";
import Button from "../components/Button";
import ListItem from "../components/ListItem";

const BoxCard = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const allChecked = checkedItems.length === pages.length;

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    if (pages.includes(name)) {
      if (checkedItems.includes(name)) {
        setCheckedItems((prev) => prev.filter(x => x !== name));
      } else {
        setCheckedItems((prev) => [...prev, name]);
      }
    } else {
      if (allChecked) {
        setCheckedItems([]);
      } else {
        setCheckedItems(pages);
      }
    }
  }

  return (
    <div className={styles.card}>
      <ListItem
        title={allChecked ? "Deselect All Pages" : 'Select All Pages'}
        isChecked={allChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div className={styles.line_break} />
      {pages.map(x => (
        <ListItem
          title={x}
          handleCheckboxChange={handleCheckboxChange}
          isChecked={checkedItems.includes(x)}
        />
      ))}
      <div className={styles.line_break} />
      <Button title='Done' />
    </div>
  );
}

export default BoxCard;