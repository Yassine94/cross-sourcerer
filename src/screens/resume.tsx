import React from 'react';

import GQLResult from 'components/GQLResult';
import { getBio, getProfileImage, getRepositories, getFollowers, getFollowings } from 'services/requests';

const Resume: React.FC = () => {
  return (
    <div>
      <GQLResult title="Bio" info={getBio} />
      <GQLResult title="Image" info={getProfileImage} />
      <GQLResult title="Repositories" info={getRepositories} />
      <GQLResult title="Followers" info={getFollowers} />
      <GQLResult title="Followings" info={getFollowings} />
    </div>
  );
};

export default Resume;
