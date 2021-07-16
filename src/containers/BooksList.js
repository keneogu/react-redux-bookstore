import React from 'react';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>BookId</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
