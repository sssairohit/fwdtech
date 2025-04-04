import React from "react";
import styles from "./Header.module.css";

const Header = ({ main, list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <img src={main.image} alt="Main story" />
        <h3>{main.title}</h3>
        <p>{main.description}</p>
        <p>
          By <span>{main.author}</span>
        </p>
      </div>

      <div className={styles.bulletedContentContainer}>
        {list.map((item, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <hr className={styles.divider} />}
            <div>
              <img src={item.image} alt={item.title} />
              <div className={styles.bulletedContent}>
                <p>{item.title}</p>
                <p className={styles.bulletAuthor}>
                  By {item.author.toUpperCase()}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
