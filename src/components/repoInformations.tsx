import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getRepositoriesInfo } from 'services/requests';
import 'styles/components/repoInformations.css';

const RepositoriesInfo = () => {
  const { REACT_APP_USER } = process.env;

  let { loading, error, data } = useQuery(getRepositoriesInfo, {
    variables: { login: REACT_APP_USER },
  });

  const dot = (color: string = 'black') => {
    return (
      <div
        style={{
          backgroundColor: color,
          width: 10,
          height: 10,
          borderRadius: 100,
          marginLeft: 16,
          marginTop: 5,
        }}
      ></div>
    );
  };

  return (
    <div className="repositoriesInfo-container">
      {loading && <p>Loading repositories info</p>}
      {error && <p>Error while fetching repositories informations</p>}
      {data && (
        <div>
          <p className="repositoriesInfo-title">My Repositories</p>
          <div className="repositoriesInfo-infos">
            {data.user.repositories.nodes.map((repo: any, index: number) => {
              return (
                <div className="repositoriesInfo-root" key={index}>
                  <ExpansionPanel className="repositoriesInfo-panel">
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="repositoriesInfo-panelHeader"
                    >
                      <Typography className="repositoriesInfo-heading">{repo.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="repositoriesInfo-panelDetails">
                      <div className="repositoriesInfo-div">
                        <div className="repositoriesInfo-parent">
                          <p className="repositoriesInfo-content-title">COLLABORATORS</p>
                          {repo.collaborators.nodes.map((collaborator: any, index: number) => {
                            return (
                              <div key={index} className="repositoriesInfo-collab">
                                {dot()}
                                <div>
                                  <p className="repositoriesInfo-content">{collaborator.login}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="repositoriesInfo-collabParent">
                          <p className="repositoriesInfo-content-title">LANGUAGES</p>
                          {repo.languages.nodes.map((language: any, index: any) => {
                            return (
                              <div key={index} className="repositoriesInfo-lang">
                                {dot(language.color)}
                                <div>
                                  <p className="repositoriesInfo-content">{language.name}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoriesInfo;
