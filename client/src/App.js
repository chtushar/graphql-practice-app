import React, { useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";

//apollo client setup
const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  let [selected, setSelected] = useState("");

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList setSelected={setSelected} />
        <AddBook />
        <BookDetails selected={selected} />
      </div>
    </ApolloProvider>
  );
}

export default App;
