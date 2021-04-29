import React from "react";
import Au from "./Author.jsx";
import "../Book/Book.scss"

const Authors = ({ items }) => {
  return (
    <div className="books_container">
      {items.map((item) => (
        <Au params={item} />
      ))}
    </div>
  );
};
export default Authors;
