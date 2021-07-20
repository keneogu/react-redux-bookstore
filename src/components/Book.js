import PropTypes from 'prop-types';

const Book = ({ book: { bookId, title, category } }) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button">Remove Book</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
