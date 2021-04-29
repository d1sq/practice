import './Book.scss';

const Bk = ({ params, onRemove }) => {
    return (
        <div className="book_cont">
            <img className="imgH" src="https://i.imgur.com/zoZvnTX.jpeg" alt="img"/>
            <div className="">{params.name}</div>
            <div className="">{params.year}</div>
            <button onRemove={params.id}>X</button>
        </div>
    );
  };
export default Bk;