import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesContent from '../article-content';
import ArticlesList from '../components/ArticleList';

const ArticlePage = () => {
  let { id } = useParams();
  const article = articlesContent.find(
    (article) => article.id === parseInt(id)
  );

  const otherArticles = articlesContent.filter((article) => article.id !== id);
  return (
    <>
      <h1>{article.title}</h1>
      <h3>{article.name}</h3>
      {article.content.map((paragraph, index) => {
        // console.log(paragraph);
        return <p key={index}>{paragraph}</p>;
      })}
      <h1>Other Articles to read...</h1>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
