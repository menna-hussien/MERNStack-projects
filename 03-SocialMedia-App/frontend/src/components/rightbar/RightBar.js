import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assests/gift.png' alt='birthday' />
          <sapn className='birthdayText'>
            <b>Sarah Hasan</b> and <b>3 other friends </b>have birthday today.
          </sapn>
        </div>
        <img src='/assests/ad.png' alt='advertisment' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user, index) => {
            return <Online key={index} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
