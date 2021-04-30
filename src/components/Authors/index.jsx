import React from "react";
import "../Book/Book.scss";
import axios from "axios";
const Authors = ({ items, onRemove }) => {
  const removeAuthor = (item) => {
    if (window.confirm("Вы действительно хотите удалить автора?")) {
      axios.delete("https://lib.poas45.ru/authors/" + item.id).then(() => {
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
            src="https://i.imgur.com/hIzK95S.jpg"
            alt="img"
          />
          <button onClick={() => removeAuthor(item)} className="delete_button">
            X
          </button>
          <div className="book__content_container">
            <div className="book_name">{item.first_name}</div>
            <div className="book_name2">{item.patronymic}</div>
            <div className="book_year">{item.last_name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Authors;