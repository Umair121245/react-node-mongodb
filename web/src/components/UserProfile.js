import React from 'react';
import Register from './Register'; // Import the Register component

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      {/* Display user profile information here */}
      <Register /> {/* Render the Register component */}
    </div>
  );
};

export default UserProfile;
