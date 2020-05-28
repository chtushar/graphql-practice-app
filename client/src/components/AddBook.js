import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_AUTHORS, ADD_BOOK_MUTATION, BOOKS } from "../queries/queries";

const AddBook = () => {
  //state
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  //graphql hooks
  const { loading, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    variables: { name, genre, authorId },
    refetchQueries: [{ query: BOOKS }],
  });

  //functions
  function displayAuthors() {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map(({ name, id }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ));
    }
  }

  function submitForm(e) {
    e.preventDefault();
    addBook();
    // setName("");
    // setGenre("");
    // setAuthorId("");
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre: </label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author: </label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Authors...</option>
          {displayAuthors()}
        </select>
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default AddBook;
