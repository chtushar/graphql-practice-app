import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOKS } from "../queries/queries";

const BookList = ({ setSelected }) => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={() => setSelected(id)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
