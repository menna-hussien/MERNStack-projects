import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='topbarLogo'>LamaSocial</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchBar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friends, posts or videos...'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbrLinks'>
          <span className='topbarLink'>Home</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img
          src='/assests/people/1.jpeg'
          alt='noProfilePhoto'
          className='topBarImg'
        />
      </div>
    </div>
  );
};

export default Topbar;
