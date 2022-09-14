import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const RightBar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Cairo</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Spain</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Interests:</span>
            <span className='rightbarInfoValue'>Drawing, Swimming</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/6.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/1.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/2.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/3.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/4.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assests/people/5.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>Fruits Mania</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {!profile ? <HomeRightbar /> : <ProfileRightbar />}
      </div>
    </div>
  );
};

export default RightBar;
