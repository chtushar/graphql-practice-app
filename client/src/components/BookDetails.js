import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOK } from "../queries/queries";

const BookDetails = ({ selected }) => {
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id: selected },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Select a book...</p>;

  return (
    <div className="book-details">
      <p>{data.book.name}</p>
    </div>
  );
};

export default BookDetails;
