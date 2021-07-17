import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category } }) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
