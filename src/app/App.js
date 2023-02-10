import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticlePreviews from "../features/articlePreviews/ArticlePreviews";
import Header from "../components/Header";
import { Articles }from '../components/Articles';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles/:articlesId"element={<Articles />} />
        <Route path="/articles" element={<ArticlePreviews />} />
      </Routes>
    </>
  );
}

export default App;
