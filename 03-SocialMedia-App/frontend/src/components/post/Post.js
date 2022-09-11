import React from 'react';
import { MoreVert } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import './post.css';
const Post = () => {
  return (
    <Paper className='post' elevation={2}>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src='/assests/people/1.jpeg'
              alt='noimage'
              className='postProfileImg'
            />
            <span className='postUsername'>Menna Hussien</span>
            <span className='postDate'>5 mins ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey it'smy first post :)</span>
          <img src='/assests/ad.png' alt='noimage' className='postImg' />
        </div>
        <div className='postButtom'>
          <div className='postButtomLeft'>
            <img className='likeIcon' src='/assests/like.png' alt='noimage' />
            <img className='likeIcon' src='/assests/heart.png' alt='noimage' />
            <span className='postLikeCounter'>5 people like it</span>
          </div>
          <div className='postButtomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Post;
