import { v1 as uuidv1 } from 'uuid';

export const BookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
        return [...state, {
            title: action.book.title,
            author: action.book.author,
            id: uuidv1()
        }]
    }
}