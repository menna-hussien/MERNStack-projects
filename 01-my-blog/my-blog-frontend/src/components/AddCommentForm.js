import React, { useState, useEffect } from 'react';

const AddCommentForm = ({ articleID, comments, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const AddComment = () => {
    console.log(articleID);
    const url = `/api/articles/${articleID}`;

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comments: { name: username, text: commentText } }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setArticleInfo(data.article));

    setUsername('');
    setCommentText('');
  };

  return (
    <div id='add-comment-form'>
      <h3>Add a comment</h3>
      <label htmlFor=''>
        Name:
        <input
          type='text'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor=''>
        Comment:
        <textarea
          id=''
          cols='10'
          rows='4'
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        ></textarea>
      </label>
      <button onClick={AddComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
