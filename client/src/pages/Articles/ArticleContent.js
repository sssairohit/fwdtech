import React from "react";
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

const ArticleContent = () => {
  return (
    <article>
      <CategoryTag text="Tech" />
      <ArticleHeader
        title="OpenAI Releases GPT-5: What It Means for the Future"
        description="The next evolution of AI is here, and it’s smarter, faster, and more helpful than ever before."
      />
      <AuthorMeta author="Rohit S.S" timestamp="April 7, 2025" />
      <HeroImage
        src="/sample-article-img.jpg"
        alt="GPT-5 Release Hero"
        caption="OpenAI HQ at the launch event"
      />
      <ArticleBody />
      <ArticleTags tags={["AI", "GPT-5", "Technology"]} />
      <ShareBar />
      <RecommendedSection />
      <CommentSection />
      <NextArticle />
    </article>
  );
};

export default ArticleContent;
