import React from "react";
import "./App.css";
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews";
import CurrentArticle from "../features/currentArticle/CurrentArticle";
import Comments from "../features/comments/Comments";
import { Route, Routes } from "react-router-dom";
import { Book } from "../page/Book";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header" />
            <main>
              <div className="current-article">
                <CurrentArticle />
                <Comments />
              </div>
              <ArticlePreviews />
            </main>
          </div>
        }
      />
      <Route path="/books" element={<Book />}/>
    </Routes>
  );
}

export default App;
