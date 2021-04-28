import React from 'react';
import Bk from './Bk';
import './Book.scss';

const Book = ({ items }) => {
  return (
    <div className="books_container">
     
        {items.map(item => (
            <Bk params={item}/>
        ))}

    </div>
  );
};
export default Book;

// items={[
//   {
//     name: '1984'
//   },
//   {
//     name: '1332',
//   },
//   {            
//     name: 'asd'
//   }
// ]}







// import React, { useEffect } from "react";

// import "./Book.scss";

// const Book = ({items}) => {
//   return (
//     // {items.map((item, index) => (
//     //     <span>{item.name}</span>}
    
//     <div className="book_cont">
//       <img className="imgH" src="https://i.imgur.com/zoZvnTX.jpeg" alt="img">

//       </img>
//     </div>
//   );
// };
// export default Book;
