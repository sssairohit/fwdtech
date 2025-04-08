import React from "react";
import styles from "./HeroImage.module.css";

const HeroImage = ({ src, alt, caption }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={alt} className={styles.image} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};

export default HeroImage;
