import React from "react";
import styles from "./ArticleTags.module.css";

const ArticleTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={styles.tags}>
      <span className={styles.label}>Topics:</span>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ArticleTags;
