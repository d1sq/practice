import React from 'react'
import "./AddBook.scss"
const AddBook = ( {onAdd}) => {

    // const [inputValue, setInputValue] = useState('');

    return (
        <div className="container_add-book">
            <div className="add-book">
                <span className="add-book__text">Добавить книгу</span>
                <br/>
                {/* <input className="field" type="text" placeholder="Url адрес обложки книги" /> */}
                <input className="field" type="text" placeholder="Название" />
                <input className="field" type="text" placeholder="Год издания" />
                <input className="field" type="text" placeholder="Автор" />
                <input className="field" type="text" placeholder="Жанр" />
                {/* <textarea className="field" type="text" placeholder="Описание" /> */}
                <button className="button">Добавить</button>
                <br/>
            </div>
        </div>
    )
}

export default AddBook
