import { gql } from 'apollo-boost';

export const FETCH_TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;