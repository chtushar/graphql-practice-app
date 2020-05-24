import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { data } = useQuery(BOOKS);
  console.log(data);
  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};

export default BookList;
