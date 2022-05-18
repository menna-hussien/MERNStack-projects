import React from 'react';
import articlesContent from '../article-content';
import ArticleList from '../components/ArticleList';
const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articlesContent} />
    </>
  );
};

export default ArticlesListPage;
