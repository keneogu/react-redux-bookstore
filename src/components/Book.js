import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category }, handleRemoveBook }) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(bookId)}>Remove Book</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
