import React from 'react';
import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';

function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src='assests/post/3.jpeg'
                alt='noImage'
                className='profileCoverImg'
              />
              <img
                src='assests/post/7.jpeg'
                alt='noImage'
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Menna Hussien</h4>
              <p className='profileInfoDesc'>Software developer </p>
            </div>
          </div>
          <div className='profileRightButtom'>
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
