import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch ] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })
    // const [books, setBooks] = useState([
    //     {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     {title: 'the final empire', author: 'brandon sanderson', id: 2}
    // ]);
    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: uuidv1()}]);
    // }
    // const removeBook = (id) => {
    //     setBooks([books.filter(book => book.id !== id)]);
    // }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (  
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
