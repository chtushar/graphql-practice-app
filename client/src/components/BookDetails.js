import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOK } from "../queries/queries";

const BookDetails = ({ selected }) => {
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id: selected },
  });

  if (loading) return <p id="book-details">Loading...</p>;
  if (error) return <p id="book-details">Select a book...</p>;

  return (
    <div id="book-details">
      <h2>{data.book.name}</h2>
      <p>{data.book.genre}</p>
      <p>{data.book.author.name}</p>
      <p>All books by this author</p>
      <ul className="other-books">
        {data.book.author.books.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookDetails;
