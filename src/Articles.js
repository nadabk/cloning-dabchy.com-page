import React from "react";
import ArticleCard from "./ArticleCard.js";

const Articles = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map(el => <ArticleCard article={el} key={el.id} />)}
    </div>
  );
};

export default Articles;
