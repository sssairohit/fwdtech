import React from "react";
import styles from "./NextArticle.module.css";

const NextArticle = ({ nextArticle }) => {
  if (!nextArticle) return null;

  return (
    <div className={styles.container}>
      <h3>Keep Reading</h3>
      <div className={styles.articleCard}>
        <img src={nextArticle.image} alt={nextArticle.title} />
        <div>
          <p className={styles.title}>{nextArticle.title}</p>
          <p className={styles.author}>By {nextArticle.author}</p>
        </div>
      </div>
    </div>
  );
};

export default NextArticle;
