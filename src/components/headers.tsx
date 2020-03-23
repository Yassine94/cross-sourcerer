import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getHeadersInfo } from 'services/requests';
import 'styles/components/headers.css';

const ProfileHeader = () => {
  const { REACT_APP_USER } = process.env;

  let { loading, error, data } = useQuery(getHeadersInfo, {
    variables: { login: REACT_APP_USER },
  });

  let nbCommits = 0,
    nbLinesCodes = 0;

  if (data) {
    const repos = data.user.repositories.nodes;

    let nbLinesCodesAdditions = 0,
      nbLinesCodesDeletions = 0;

    repos.forEach((repo: any) => {
      if (repo.defaultBranchRef != null) {
        nbCommits += repo.defaultBranchRef.target.history.totalCount;

        repo.defaultBranchRef.target.history.nodes.forEach((data: any) => {
          nbLinesCodesAdditions += data.additions;
          nbLinesCodesDeletions += data.deletions;
        });
        nbLinesCodes = nbLinesCodesAdditions - nbLinesCodesDeletions;
      }
    });
  }

  return (
    <div className="header-container">
      {loading && <p>Loading headers</p>}
      {error && <p>Error while fetching headers</p>}
      {data && (
        <div className="header-infos">
          <div className="header-block first">
            <p className="header-title">REPOSITORIES</p>
            <p className="header-content">{data.user.repositories.nodes.length}</p>
          </div>
          <div className="header-block">
            <p className="header-title">COMMITS</p>
            <p className="header-content">{nbCommits}</p>
          </div>
          <div className="header-block">
            <p className="header-title">LINES OF CODE</p>
            <p className="header-content">{nbLinesCodes}</p>
          </div>
          <div className="header-block">
            <p className="header-title">FOLLOWERS</p>
            <p className="header-content">{data.user.followers.totalCount}</p>
          </div>
          <div className="header-block">
            <p className="header-title">FOLLOWING</p>
            <p className="header-content">{data.user.following.totalCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
