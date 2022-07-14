import { gql } from '@apollo/client';

export const MISSIONS = gql`
  query Missions($limit: Int, $offset: Int) {
    missions(limit: $limit, offset: $offset) {
      description
    }
  }
`;

export const SHIPS = gql`
  query Ships($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      image
      name
      model
      missions {
        flight
        name
      }
      position {
        latitude
        longitude
      }
    }
  }
`;
