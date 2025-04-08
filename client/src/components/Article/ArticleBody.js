import React from "react";
import styles from "./ArticleBody.module.css";
import AdBanner from "./AdBanner";

const ArticleBody = ({ content }) => {
  return (
    <div className={styles.body}>
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;
          case "subtitle":
            return <h2 key={index}>{block.text}</h2>;
          case "image":
            return (
              <div key={index} className={styles.imageWrapper}>
                <img src={block.src} alt={block.alt} />
                {block.caption && <p className={styles.caption}>{block.caption}</p>}
              </div>
            );
          case "ad":
            return <AdBanner key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleBody;
