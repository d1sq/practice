import React from 'react';
// import '../Book/Book.scss'

const Au = ({ params }) => {
    return (
        <div className="book_cont">
            <img className="imgH" src="https://i.imgur.com/hIzK95S.jpg" alt="img"/>
            <div className="">{params.first_name}</div>
           <div className="">{params.patronymic}</div> 
           <div className="">{params.last_name}</div>
        </div>
    );
  };
export default Au;