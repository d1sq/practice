import React from "react";
import "../Book/Book.scss"

const Genres = ({ items }) => {
  return (
    <div className="books_container">
      {items.map((item) => (
        <div key={item.id} className="book_cont">
        <img className="imgH" src="https://i.imgur.com/jKclKJH.jpg" alt="img"/>
        <div className="">{item.name}</div>
    </div>
      ))}
    </div>
  );
};
export default Genres;
