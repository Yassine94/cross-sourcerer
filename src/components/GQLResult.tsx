import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import 'styles/components/GQLResult.css';
import { DocumentNode } from 'graphql';

const GQLResult = ({ title, info }: { title: string; info: DocumentNode }) => {
  const { REACT_APP_USER } = process.env;

  const { loading, error, data } = useQuery(info, {
    variables: { login: REACT_APP_USER },
  });

  return (
    <div className="gql">
      <p className="gql-title">{title}</p>
      <pre className="gql-res">
        {loading && <p>Loading</p>}
        {error && <p>Error</p>}
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  );
};

export default GQLResult;
