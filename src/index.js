import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ApolloProvider}from '@apollo/client/react';
import client from './routes/apollo'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);