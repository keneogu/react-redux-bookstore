/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books, fil } = props;

  const handleRemoveBook = (book) => {
    props.dispatch(removeBook(book));
  };

  const handleFilterChange = (e) => {
    props.dispatch(changeFilter(e.target.value));
  };

  return (

    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  dispatch: PropTypes.func.isRequired,
  fil: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  fil: state.filter,
});

export default connect(mapStateToProps)(BooksList);
