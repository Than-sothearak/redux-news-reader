import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentArticle,
  isLoadingCurrentArticle,
} from "../currentArticle/currentArticleSlice";
import FullArticle from "../../components/FullArticle";
// import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";

const CurrentArticle = () => {
  // const dispatch = useDispatch();
  const articles = useSelector(selectCurrentArticle);
  const currentArticleIsLoading = useSelector(isLoadingCurrentArticle);
  const { articlesId } = useParams();

  if (currentArticleIsLoading) {
    return <div>Loadin...  {articlesId}</div>;
  } else if (!articles) {
    return null;
  }

  return <FullArticle article={articles} />;
};

export default CurrentArticle;
