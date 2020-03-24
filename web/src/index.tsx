import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Routes } from './Routes';
import { getAccessToken } from './accessToken';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  request: operation => {
    const accessToken = getAccessToken();
    operation.setContext({
      headers: {
        authorization: `bearer ${accessToken}`
      }
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
