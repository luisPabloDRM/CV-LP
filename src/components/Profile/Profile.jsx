import React from 'react';

const Profile = ({user}) => {
    const{ email, password, name } = user || {};
  return( 
  <div className='card'  >
      <h1>Profile</h1>
      <p>Email: {email} </p>
      <p>Password: {password} </p>
      <p>Name: { name } </p>

  </div>

  );
};

export default Profile;
