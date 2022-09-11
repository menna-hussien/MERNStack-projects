import React from 'react';
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  EmojiEmotionsSharp,
} from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import './share.css';
import { red } from '@mui/material/colors';

const Share = () => {
  const colorRed = red[500];

  return (
    <Paper className='share' elevation={5}>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            src='/assests/people/1.jpeg'
            alt='noimage'
            className='shareProfileImg'
          />
          <input className='shareInput' placeholder="What's in your mind..." />
        </div>
        <hr className='shareHr' />
        <div className='shareButtom'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <PermMedia className='shareIcon' htmlColor='tomato' />
              <span className='shareOptionText'>Photo Or Video</span>
            </div>
            <div className='shareOption'>
              <Label className='shareIcon' htmlColor='blue' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room className='shareIcon' htmlColor='green' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions className='shareIcon' htmlColor='goldenrod' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </Paper>
  );
};

export default Share;
