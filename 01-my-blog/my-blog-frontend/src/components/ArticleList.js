import React from 'react';
import { Link } from 'react-router-dom';
const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((articleInfo, key) => {
        const { id, title, content } = articleInfo;
        return (
          <article>
            <Link className='article-list-item' to={`/article/${id}`} key={key}>
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
