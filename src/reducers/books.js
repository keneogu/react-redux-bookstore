import { v4 as uuid } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { bookId: uuid(), ...action.payload }];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
