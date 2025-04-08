import React from "react";
import styles from "./CommentSection.module.css";

const CommentSection = () => {
  return (
    <div className={styles.comments}>
      <h3>Discussion</h3>
      <p>Comments are disabled in this demo. Backend integration coming soon.</p>
    </div>
  );
};

export default CommentSection;
