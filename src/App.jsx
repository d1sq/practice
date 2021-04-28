import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { Book, AddBook, Header, MainPage, Authors, Genres } from "./components";

function App() {
  const [books, setBooks] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    axios.get("https://lib.poas45.ru/books").then(({ data }) => {
      setBooks(data);
    });
    axios.get("https://lib.poas45.ru/authors").then(({ data }) => {
      setAuthors(data);
    });
    axios.get("https://lib.poas45.ru/genres").then(({ data }) => {
      setGenres(data);
    });
  }, []);

  const onAddBook = obj => {
    const newBooks = [...books, obj];
    setBooks(newBooks);
  };


  return (
    <div className="library">
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/books">
        {books ? <Book items={books} key={Math.random}/> : "Загрузка..."}
      </Route>
      <Route exact path="/authors">
        {authors ? (
          <Authors items={authors} key={Math.random()} />
        ) : (
          "Загрузка..."
        )}
      </Route>
      <Route exact path="/genres">
        {genres ? <Genres items={genres} key={Math.random()} /> : "Загрузка..."}
      </Route>
      <Route exact path="/addbook">
        <AddBook onAdd={onAddBook} />
      </Route>
    </div>
  );
}

export default App;
