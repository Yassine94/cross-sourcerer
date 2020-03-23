import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getBio } from 'services/requests';
import 'styles/components/bio.css';

const ProfileBio = () => {
  const { REACT_APP_USER } = process.env;

  const { loading, error, data } = useQuery(getBio, {
    variables: { login: REACT_APP_USER },
  });

  return (
    <div className="bio-container">
      {loading && <p>Loading profile bio</p>}
      {error && <p>Error while fetching bio</p>}
      {data && (
        <div className="bio-infos">
          <p className="bio-name">{data.user.name}</p>
          <p className="bio-bio">{data.user.bio}</p>
          <p className="bio-location">{data.user.location}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileBio;
