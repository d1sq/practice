import React from "react";
import "./Book.scss";
import axios from "axios";

const Book = ({ items, onRemove }) => {

  const removeBook = item => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('https://lib.poas45.ru/books/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };
  return (
    <div className="books_container">
      {items.map((item) => (
        <div key={item.id} class="book_container">
            <img className="imgH"src="https://sun9-52.userapi.com/impg/dTYRUVe3JtBcG-UNxcW-BoHEiMoVf18mupzrXg/wA5qfwrYSNM.jpg?size=436x604&quality=96&sign=249b0f97a32f81acd6b386a8bbb8f0c0&type=album" alt="img"/>
            <button onClick={() => removeBook(item)} class="delete_button">X</button>
          <div class="book__content_container">
              <div class="book_name">{item.name}</div>
              <div class="book_year">{item.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Book;

