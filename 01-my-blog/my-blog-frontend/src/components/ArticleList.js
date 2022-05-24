import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((articleInfo, index) => {
        const { _id: id, title, content } = articleInfo;
        return (
          <article key={index}>
            <Link className='article-list-item' to={`/article/${id}`}>
              <h2>{title}</h2>
              <p>{content[0].substring(0, 150)}...</p>
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default ArticlesList;
