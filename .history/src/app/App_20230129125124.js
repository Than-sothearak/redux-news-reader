import React from 'react';
import './App.css';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import CurrentArticle from '../features/currentArticle/CurrentArticle';
import Comments from '../features/comments/Comments';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/'></Route>
    </Routes>
  );
}

export default App;