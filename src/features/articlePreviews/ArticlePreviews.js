import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoading,
} from "./articlePreviewsSlice";
import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";
import ArticleListItem from "../../components/ArticleListItem";
import { Link } from 'react-router-dom';
const ArticlePreviews = () => {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);
  
  useEffect(() => {
    dispatch(loadAllPreviews());
  }, [dispatch]);

  if (isLoadingPreviews) {
    return <div>loading state</div>;
  }

  return (
    <>
      <h2 className="container mx-auto pl-8 pt-5 text-2xl font-bold text-center" >All Articles</h2>
     <div className="container mx-auto px-4"> 
     <section class="grid">
        
        {articlePreviews.map((article) => (
          <Link 
            key={article.id}
            to={`${article.id}`}
            >
          <div className="cotainer mx-auto w-96 p-0 m-0"
            onClick={(e) => dispatch(loadCurrentArticle(article.id))}
          >
            <ArticleListItem article={article} />
            
          </div>
        </Link>
        ))}
      
        
      </section>
     </div>
    </>
  );
};

export default ArticlePreviews;
