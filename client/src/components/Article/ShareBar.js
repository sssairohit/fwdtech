import React from "react";
import styles from "./ShareBar.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ShareBar = ({ url }) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className={styles.shareBar}>
      <span>Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default ShareBar;
