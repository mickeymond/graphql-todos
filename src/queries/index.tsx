import { gql } from 'apollo-boost';

export const FETCH_TODOS = gql`
  query {
    todos {
      id
      type
    }
  }
`;

export const FETCH_TODO = gql`
  query fetchTodo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`;
