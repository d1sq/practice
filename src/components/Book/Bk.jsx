import './Book.scss';

const Bk = ({ params }) => {
    return (
        <div className="book_cont">
            <img className="imgH" src="https://i.imgur.com/zoZvnTX.jpeg" alt="img"/>
            <div className="">{params.name}</div>
            <div className="">{params.year}</div>
        </div>
    );
  };
export default Bk;