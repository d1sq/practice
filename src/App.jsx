import React, { useState, useEffect } from "react";
import "primereact/resources/themes/mdc-light-indigo/theme.css"
import { Button } from 'primereact/button';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

// import booksSvg from "../src/assets/icons/books.svg";
import AddBook from "./Components/AddBook";

import Book from "./Components/Book";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios.get("https://lib.poas45.ru/books").then(({ data }) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="library">
      <div className="lirary__header">
      <Button label="Books" className="p-button-secondary margin15" />
      <Button label="Authors" className="p-button-success margin15" />
      <Button label="Genres" className="p-button-warning margin15" />
      </div>
      {/*  header-end */}
       {books ? (
          <Book
            items={books}
            key={books.id}
          />
        ) : (
          'Загрузка...'
        )} 
      <AddBook></AddBook>
    </div>
  );
}

export default App;
