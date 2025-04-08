import React from "react";
import styles from "./AuthorMeta.module.css";

const AuthorMeta = ({ author, timestamp }) => {
  return (
    <div className={styles.meta}>
      <span>By {author.toUpperCase()}</span>
      <span> • {timestamp}</span>
    </div>
  );
};

export default AuthorMeta;
