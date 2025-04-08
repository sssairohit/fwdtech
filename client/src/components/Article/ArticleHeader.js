import React from "react";
import styles from "./ArticleHeader.module.css";
import CategoryTag from "./CategoryTag";

const ArticleHeader = ({ category, title, description }) => {
  return (
    <div className={styles.header}>
      <CategoryTag category={category} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ArticleHeader;
