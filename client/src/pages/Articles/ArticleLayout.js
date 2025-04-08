import React from "react";
import styles from "./ArticleLayout.module.css";
import CategoryTag from "../../components/Article/CategoryTag";
import ArticleHeader from "../../components/Article/ArticleHeader";
import AuthorMeta from "../../components/Article/AuthorMeta";
import HeroImage from "../../components/Article/HeroImage";
import ArticleBody from "../../components/Article/ArticleBody";
import ArticleTags from "../../components/Article/ArticleTags";
import ShareBar from "../../components/Article/ShareBar";
import RecommendedSection from "../../components/Article/RecommendedSection";
import CommentSection from "../../components/Article/CommentSection";
import NextArticle from "../../components/Article/NextArticle";
import AdSidebar from "../../components/Article/AdSidebar";

const ArticleLayout = ({ article }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <CategoryTag category={article.category} />
        <ArticleHeader title={article.title} description={article.description} />
        <AuthorMeta author={article.author} date={article.date} />
        <HeroImage src={article.image.src} alt={article.image.alt} caption={article.image.caption} />
        <ArticleBody content={article.content} />
        <ArticleTags tags={article.tags} />
        <ShareBar />
        <RecommendedSection recommendations={article.recommendations} />
        <CommentSection />
        <NextArticle next={article.next} />
      </div>

      <aside className={styles.sidebar}>
        <AdSidebar />
        {/* Placeholder for future sidebar widget */}
        <div className={styles.placeholder}>[ Widget coming soon ]</div>
      </aside>
    </div>
  );
};

export default ArticleLayout;
