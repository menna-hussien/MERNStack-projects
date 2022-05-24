import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import fetchdata from '../context/fetchData';

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = '/api/articles/';
  useEffect(() => {
    fetchdata(url).then((articlesFetched) => {
      setArticles(articlesFetched.articles);
    });
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <>
        <h1>Articles</h1>
        <ArticleList articles={articles} />
      </>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default ArticlesListPage;
