import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BOOK } from "../queries/queries";

const BookDetails = () => {
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id: "5ec67aff13f53c0210f87286" },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="book-details">
      <p>Output Book Details here</p>
    </div>
  );
};

export default BookDetails;
