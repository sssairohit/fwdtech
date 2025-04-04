import React from "react";
import styles from "./Category.module.css";

const Category = ({ items, categoryTitle }) => {
  return (
    <div className={styles.container}>
        <hr/>
      <div>
        <h3>{categoryTitle}</h3>
      </div>
      <div className={styles.itemContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemAuthor}>By {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
