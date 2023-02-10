import React from "react";

export default function ArticleListItem({ article }) {
  return (
    <button
      key={article.id}
      className="pt-6 pb-8"
    >
      <img
        class='object-fill w-96 hover:object-scale-down " '
        src={article.image}
        alt={article.image}
      />

      <div className="container w-96 text-left p-2">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-preview">{article.preview}</p>
      </div>
    </button>
  );
}
