import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
    <div className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.navLogo}>
        <Link to="/">
          <span className={styles.navLogo}>fwdtech</span>
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <ul className={styles.navLinks}>
        {["Startups", "Corporates", "Ventures", "Events", "DeepTech", "Library"].map(
          (item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className={styles.navItem}>
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Right: Icons */}
      <div className={styles.navIcons}>
        <Link to="/signin" className={styles.navButton}>
          <User size={18} />
          <span>Sign In</span>
        </Link>
        <button className={styles.iconButton} aria-label="Search">
          <Search size={18} />
        </button>
        <button className={styles.menuButton} aria-label="Menu">
          <Menu size={18} />
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
