import React, { useEffect } from 'react';

const VoteSection = ({ articleID, likesNum, setArticleInfo }) => {
  console.log(likesNum);
  const likeArticle = () => {
    const url = `/api/articles/${articleID}`;

    /* const result = await fetch(url, {
      method: 'post',
    });
    const body = await result.json();
    setArticleInfo(body);*/

    ////
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likesNum: likesNum }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setArticleInfo(data.article));
  };

  return (
    <div id='upvotes-section'>
      <p>this post has been liked by {likesNum}</p>
      <button onClick={likeArticle}>Like</button>
    </div>
  );
};

export default VoteSection;
