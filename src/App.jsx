import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { Book, AddBook, Header, MainPage } from "./components";


function App() {
  const [books, setBooks] = useState(null);
  const [authors, setAuthors] = useState(null);

 

  useEffect(() => {
    axios
      .get('https://lib.poas45.ru/books')
      .then(({ data }) => {
        setBooks(data);
      });
    axios.get('https://lib.poas45.ru/authors').then(({ data }) => {
      setAuthors(data);
    });
}, []);

  return (
    <div className="library">
      <Route path="/">
      <Header />
      </Route>
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route exact path="/books">
      {books ? <Book items={books} key={books.id} /> : "Загрузка..."}
      </Route>
      <Route exact path="/authors">
      {authors ? <Book items={authors} key={authors.id} /> : "Загрузка..."}
      </Route>
      <Route exact path="/genres"></Route>
      <Route exact path="/addbook">
      
        <AddBook />
      </Route>
    </div>
  );
}

export default App;