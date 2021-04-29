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
        <div key={item.id} className="book_cont">
          <img
            className="imgH"
            src="https://i.imgur.com/zoZvnTX.jpeg"
            alt="img"
          />
          <div className="">{item.name}</div>
          <div className="">{item.year}</div>
          <div onClick={() => removeBook(item)}>Delete book</div>
        </div>
      ))}
    </div>
  );
};
export default Book;

// import React from "react";
// import Bk from "./Bk";
// import "./Book.scss";

// const Book = ({ items }) => {
//   return (
//     <div className="books_container">
//       {items.map((item) => (
//         <Bk params={item} />

//       ))}
//     </div>
//   );
// };
// export default Book;
