import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
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
