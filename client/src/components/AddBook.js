import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name: </label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre: </label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author: </label>
        <select>
          <option>Select author...</option>
          {data.authors.map(({ name, id }) => (
            <option key={id}>{name}</option>
          ))}
        </select>
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default AddBook;
