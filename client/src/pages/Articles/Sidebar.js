import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.adPlaceholder}>
        <p>Ad Placeholder</p>
      </div>
      {/* Future: Add NewsletterSignup, RelatedPosts, etc. */}
    </div>
  );
};

export default Sidebar;
