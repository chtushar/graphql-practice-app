import { gql } from "apollo-boost";

const BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { BOOKS, GET_AUTHORS, ADD_BOOK_MUTATION };
