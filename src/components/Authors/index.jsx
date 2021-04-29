import React from "react";
import "../Book/Book.scss"

const Authors = ({ items }) => {
  return (
    <div className="books_container">
    {items.map((item) => (
      <div key={item.id} className="book_cont">
        <img className="imgH" src="https://i.imgur.com/hIzK95S.jpg" alt="img" />
        <div className="">{item.first_name}</div>
        <div className="">{item.patronymic}</div>
        <div className="">{item.last_name}</div>
      </div>

    ))}
  </div>
  );
};
export default Authors;
