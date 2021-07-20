import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { bookId: Math.floor(Math.random() * 1000), ...action.payload }];
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.filter((e) => e.id !== action.payload.bookId),
      };
    default:
      return state;
  }
};

export default booksReducer;
