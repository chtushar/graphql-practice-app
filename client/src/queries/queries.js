import { gql } from "apollo-boost";

const BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
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
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { BOOKS, BOOK, GET_AUTHORS, ADD_BOOK_MUTATION };
