const Author = ({ params }) => {
    return (
        <div className="book_cont">
            <img className="imgH" src="https://i.imgur.com/zoZvnTX.jpeg" alt="img"/>
            <div className="">{params.first_name}</div>
            <div className="">{params.last_name}</div>
            <div className="">{params.patronymic}</div>
        </div>
    );
  };
export default Author;