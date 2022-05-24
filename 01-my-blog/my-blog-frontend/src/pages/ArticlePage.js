import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesContent from '../article-content';
import ArticlesList from '../components/ArticleList';
import ErrorPage from '../pages/ErrorPage';
import fetchdata from '../context/fetchData';
import CommentsList from '../components/CommentsList';
import VoteSection from '../components/VoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
  let { id } = useParams();

  //consider two states ,one for fetching data and the other for loading state
  const [articleInfo, setArticleInfo] = useState({
    likesNum: 0,
    dislikesNum: 0,
    comments: [],
  });

  const [otherArticles, setOtherArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const url = `/api/articles/${id}`;
  const urlAll = `/api/articles/`;

  useEffect(() => {
    fetchdata(url).then((article) => {
      setArticleInfo(article.article);
      //console.log(article);
    });
    fetchdata(urlAll).then((allArticles) => {
      setOtherArticles(allArticles.articles);
      console.log(allArticles.articles);
    });
    setLoading(false);
  }, [id]);

  if (!articleInfo) {
    return <ErrorPage />;
  }

  const otherArticlesDisplayed = otherArticles.filter(
    (article) => article._id !== id
  );

  if (!loading) {
    return (
      <>
        <h1>{articleInfo.title}</h1>
        <h3>{articleInfo.name}</h3>
        <VoteSection
          articleID={id}
          likesNum={articleInfo.likesNum}
          setArticleInfo={setArticleInfo}
        />
        {articleInfo.content?.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <br />
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm
          articleID={id}
          comments={articleInfo.comments}
          setArticleInfo={setArticleInfo}
        />
        <h1>Other Articles to read...</h1>
        <ArticlesList articles={otherArticlesDisplayed} />
      </>
    );
  } else {
    return <h1>LOADING...</h1>;
  }
};

export default ArticlePage;
