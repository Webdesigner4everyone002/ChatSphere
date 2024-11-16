import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './RightSidebar.css';
import assets from '../../assets/assets';

const RightSidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Add any additional logout logic here, like clearing user session data
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="Profile" />
        <h3>
          Richard Sanford <img src={assets.green_dot} className="dot" alt="Online Status" />
        </h3>
        <p>Hey, there! I am Richard Sanford using the chat app.</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="Media 1" />
          <img src={assets.pic2} alt="Media 2" />
          <img src={assets.pic3} alt="Media 3" />
          <img src={assets.pic4} alt="Media 4" />
          <img src={assets.pic1} alt="Media 5" />
          <img src={assets.pic1} alt="Media 6" />
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default RightSidebar;
