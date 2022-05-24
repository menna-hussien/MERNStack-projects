import React from 'react';

const CommentsList = ({ comments }) => {
  //TO_DO: map on all the comments and call comment component with unique index
  if (comments.length !== 0) {
    return (
      <>
        <h3>Comments</h3>
        {comments.map((comment, index) => {
          console.log(comment.text);
          return (
            <div className='comment' key={index}>
              <h4>username: {comment.name}</h4>
              <p>commented: {comment.text}</p>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h4>No comments to preview</h4>;
  }
};

export default CommentsList;
