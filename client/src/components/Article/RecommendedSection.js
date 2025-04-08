import React from "react";
import Category from "../Category/Category";

const RecommendedSection = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginTop: "4em" }}>
      <Category categoryTitle="Recommended for You" items={items} />
    </div>
  );
};

export default RecommendedSection;
