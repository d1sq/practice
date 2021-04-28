import React from "react";
import Bk from "./Bk";
import "./Book.scss";

const Book = ({ items }) => {
  return (
    <div className="books_container">
      {items.map((item) => (
        <Bk params={item} />
      ))}
    </div>
  );
};
export default Book;
