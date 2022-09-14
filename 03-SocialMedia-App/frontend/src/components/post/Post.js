import React, { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import './post.css';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
  const user = Users.filter((u) => u.id === post?.userId);
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked((preLiked) => !preLiked);
  };
  return (
    <Paper className='post' elevation={2}>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={user[0].profilePicture}
              alt='noimage'
              className='postProfileImg'
            />
            <span className='postUsername'>{user[0].username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={post.photo} alt='noimage' className='postImg' />
        </div>
        <div className='postButtom'>
          <div className='postButtomLeft'>
            <img
              className='likeIcon'
              src='/assests/like.png'
              alt='noimage'
              onClick={likeHandler}
            />
            <img className='likeIcon' src='/assests/heart.png' alt='noimage' />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postButtomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Post;
