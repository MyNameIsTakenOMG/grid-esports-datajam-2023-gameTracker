'use client';

import { client } from '@/apollo/client';
import store from '@/store/store';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';

export default function TournamentsLayout({ children }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    </>
  );
}
