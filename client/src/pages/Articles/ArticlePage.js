import React from "react";
import styles from "./ArticlePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ArticleContent from "./ArticleContent";
import Sidebar from "./Sidebar";

const ArticlePage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.article}>
            <ArticleContent />
          </div>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
