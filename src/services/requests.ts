import { gql } from 'apollo-boost';

export const getBio = gql`
  query($login: String!) {
    user(login: $login) {
      bio
      name
      company
      email
      location
    }
  }
`;

export const getFollowers = gql`
  query($login: String!) {
    user(login: $login) {
      followers {
        totalCount
      }
    }
  }
`;

export const getRepositories = gql`
  query($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        totalCount
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    additions
                    deletions
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getFollowings = gql`
  query($login: String!) {
    user(login: $login) {
      following {
        totalCount
      }
    }
  }
`;

export const getProfileImage = gql`
  query {
    viewer {
      avatarUrl
    }
  }
`;

export const getHeadersInfo = gql`
  query($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100) {
        totalCount
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    additions
                    deletions
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getRepositoriesInfo = gql`
  query($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        totalCount
        nodes {
          name
          nameWithOwner
          assignableUsers {
            totalCount
          }
          collaborators(first: 10) {
            totalCount
            nodes {
              login
              avatarUrl
            }
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
          languages(first: 100) {
            totalCount
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const getLanguages = gql`
  query($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        totalCount
        nodes {
          languages(first: 100) {
            totalCount
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
`;
