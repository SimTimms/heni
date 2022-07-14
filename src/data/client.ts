import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ships: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});

export const client = new ApolloClient({
  cache: cache,
  uri: process.env.REACT_APP_API
});
