import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book: { bookId, title, category }, handleRemoveBook }) => (

  <div className="book">
    <div className="book-left">
      <div className="book_category">{category}</div>
      <div className="book_title">{title}</div>
      <div className="book_author">Author</div>
      <div className="book_action-container">
        <span className="book_action">Comments</span>
        <span className="book_action bk"><button className="normalize" type="button" onClick={() => handleRemoveBook(bookId)}>Remove</button></span>
        <span className="book_action bk">Edit</span>
      </div>
    </div>
    <div className="book-right">
      <div className="box">
        <div className="percent">
          <svg>
            <circle cx="34" cy="34" r="34" />
            <circle cx="34" cy="34" r="34" />
          </svg>
        </div>
      </div>
      <div className="completion">
        <div className="completion_number">64%</div>
        <div className="completion_text">Completed</div>
      </div>
      <div className="chapter">
        <div className="chapter_text">CURRENT CHAPTER</div>
        <div className="chapter_number">Chapter 17</div>
        <button type="button" className="chapter_button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
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
