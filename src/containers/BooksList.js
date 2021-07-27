/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';

const BooksList = (props) => {
  const {
    books, fil, removeBook,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (

    <>
      <table>
        <tbody>
          {books.filter((book) => book.category === fil || fil === 'All' || fil === '').map((book) => (
            <Book key={book.bookId} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  // changeFilter: PropTypes.func.isRequired,
  fil: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  fil: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
