import React from "react";
import Ge from "./Genre.jsx";
import "../Book/Book.scss"

const Genres = ({ items }) => {
  return (
    <div className="books_container">
      {items.map((item) => (
        <Ge params={item} />
      ))}
    </div>
  );
};
export default Genres;
