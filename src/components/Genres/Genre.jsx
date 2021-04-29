import React from 'react';
// import '../Book/Book.scss'

const Au = ({ params }) => {
    return (
        <div className="book_cont">
            <img className="imgH" src="https://i.imgur.com/jKclKJH.jpg" alt="img"/>
            <div className="">{params.name}</div>
        </div>
    );
  };
export default Au;