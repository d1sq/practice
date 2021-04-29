import React from "react";
import "../Book/Book.scss"
import axios from 'axios';
const Authors = ({ items, onRemove }) => {

  const removeAuthor = item => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('https://lib.poas45.ru/authors/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  return (
    <div className="books_container">
    {items.map((item) => (
      <div key={item.id} className="book_cont">
        <img className="imgH" src="https://i.imgur.com/hIzK95S.jpg" alt="img" />
        <div className="">{item.first_name}</div>
        <div className="">{item.patronymic}</div>
        <div className="">{item.last_name}</div>
        <div onClick={() => removeAuthor(item)}>Delete Author</div>
      </div>

    ))}
  </div>
  );
};
export default Authors;
