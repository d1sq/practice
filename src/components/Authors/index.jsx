import React from "react";
import Author from "./Author";
import "./Authors.scss";

const Book = ({ items }) => {
  return (
    <div className="books_container">
      {items.map((item) => (
        <Author params={item} />
      ))}
    </div>
  );
};
export default Book;

