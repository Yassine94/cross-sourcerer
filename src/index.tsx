import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

import App from 'screens/app';
import 'styles/app/index.css';
import * as serviceWorker from 'serviceWorker';

const { REACT_APP_TOKEN } = process.env;

const githubAPI = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const headers = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${REACT_APP_TOKEN}`,
    },
  };
});

const apolloClient = new ApolloClient({
  link: headers.concat(githubAPI),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
