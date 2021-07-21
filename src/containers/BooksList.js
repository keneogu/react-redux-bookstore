/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books } = props;

  const handleRemoveBook = (book) => {
    props.dispatch(removeBook(book));
  };

  return (

    <>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>BookId</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.bookId} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  // filter: state.filter,
});

export default connect(mapStateToProps)(BooksList);
