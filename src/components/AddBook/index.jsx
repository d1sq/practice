import React, { useState } from "react";
import "./AddBook.scss";
import axios from "axios";
const AddBook = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const addBook = () => {
    axios
      .post("https://lib.poas45.ru/books", {
        author_ids: author,
        genre_id: genre,
        name,
        year,
      })
      .then(() => alert("Успешно отправлено"))
      .then(({ data }) => {
        const booksObj = { ...data, data };
        onAdd(booksObj);
      })
      .catch(() => {
        console.log('Ошибка при отправке');
      });
    setName("");
    setYear("");
    setAuthor("");
    setGenre("");
  };
  return (
    <div className="container_add-book">
      <div className="add-book">
        <span className="add-book__text">Добавить книгу</span>
        {/* <input className="field" type="text" placeholder="Url адрес обложки книги" /> */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field"
          type="text"
          placeholder="Название"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="field"
          type="text"
          placeholder="Год издания"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="field"
          type="text"
          placeholder="Автор"
        />
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="field"
          type="text"
          placeholder="Жанр"
        />
        {/* <textarea className="field" type="text" placeholder="Описание" /> */}
        <button onClick={addBook} className="button">
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddBook;
