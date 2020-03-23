import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getRepositories } from 'services/requests';

const ProfileRepo = () => {
  const { REACT_APP_USER } = process.env;

  const { loading, error, data } = useQuery(getRepositories, {
    variables: { login: REACT_APP_USER },
  });

  if (data) {
    const repos = data.user.repositories.nodes;
    let nbCommits = 0;
    repos.forEach((item: any) => {
      if (item.defaultBranchRef != null) {
        return (nbCommits += item.defaultBranchRef.target.history.totalCount);
      }
    });
    console.log(repos);
    console.log(nbCommits);
  }

  return (
    <div className="profile-img-container">
      {loading && <p>Loading repositories info</p>}
      {error && <p>Error while fetching repositories info</p>}
      {data && <p></p>}
    </div>
  );
};

export default ProfileRepo;
