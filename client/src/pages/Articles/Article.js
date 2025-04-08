import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ArticleLayout from "./ArticleLayout";
import mockArticle from "./mockArticle"; // Create a dummy article JSON for now

const Article = () => {
  return (
    <>
      <Navbar />
      <ArticleLayout article={mockArticle} />
      <Footer />
    </>
  );
};

export default Article;
