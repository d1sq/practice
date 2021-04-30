import React from "react";
import "./Book.scss";
import axios from "axios";

const Book = ({ items, onRemove }) => {
  const removeBook = (item) => {
    if (window.confirm("Вы действительно хотите удалить книгу?")) {
      axios.delete("https://lib.poas45.ru/books/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };
  return (
    <div className="books_container">
      {items.map((item) => (
        <div key={item.id} className="book_container">
          <img
            className="imgH"
            src="https://i.imgur.com/yEsOYVW.jpg"
            alt="img"
          />
          <button onClick={() => removeBook(item)} className="delete_button">
            X
          </button>
          <div className="book__content_container">
            <div className="book_name">{item.name}</div>
            <div className="book_year">{item.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Book;
