import React from "react";
import CurrentArticle from "../features/currentArticle/CurrentArticle";
import Comments from "../features/comments/Comments";
// import ArticlePreviews from "../features/articlePreviews/ArticlePreviews";

export const Articles = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header" />
        <main>
          <div className="current-article">
            <CurrentArticle />
            <Comments />
          </div>
        </main>
      </div>
    </div>
  );
};
