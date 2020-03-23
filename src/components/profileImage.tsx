import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getProfileImage } from 'services/requests';
import 'styles/components/profileImage.css';

const ProfileImage = () => {
  const { REACT_APP_USER } = process.env;

  const { loading, error, data } = useQuery(getProfileImage, {
    variables: { login: REACT_APP_USER },
  });

  return (
    <div className="profile-img-container">
      {loading && <p>Loading profile image</p>}
      {error && <p>Error while fetching profile image</p>}
      {data && <img className="profile-img" src={data.viewer.avatarUrl} alt="profile" />}
    </div>
  );
};

export default ProfileImage;
