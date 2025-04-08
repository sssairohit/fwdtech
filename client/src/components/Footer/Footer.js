import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Dribbble,
  Instagram,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Got a Tip?", "Contact Us"],
  },
  {
    title: "Legal",
    links: ["Pressroom", "Changelog", "Terms of Use", "Cookie Policy"],
  },
  {
    title: "Sitemap",
    links: ["All Articles", "Categories", "Corporate", "RSS Feeds"],
  },
  {
    title: "Accessibility",
    links: [
      "Region: International",
      "Language: English",
      "Currency: US $",
      "Theme: Light",
    ],
  },
];

const socialIcons = [
  { icon: <Linkedin size={20} />, to: "/" },
  { icon: <Github size={20} />, to: "/" },
  { icon: <Dribbble size={20} />, to: "/" },
  { icon: <Instagram size={20} />, to: "/" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>fwdtech</h2>
            <div className={styles.socials}>
              {socialIcons.map((item, idx) => (
                <Link to={item.to} key={idx} className={styles.socialIcon}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className={styles.columnTitle}>{section.title}</h4>
                <ul className={styles.columnList}>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to="/" className={styles.columnLink}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 All Rights Reserved – fwdtech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
