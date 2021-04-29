import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="lirary__header">
      <Link to={`/`}>
      <Button label="Main page" className="button-secondary margin15" />
      </Link>
      <Link to={`/books`}>
        <Button label="Books" className="button-secondary margin15" />
      </Link>
      <Link to={`/authors`}>
        <Button label="Authors" className="button-success margin15" />
      </Link>
      <Link to={`/genres`}>
        <Button label="Genres" className="button-warning margin15" />
      </Link>
      <Link to={`/addbook`}>
        <Button label="Add book" className="button-warning margin15" />
      </Link>
    </div>
  );
};

export default Header;
