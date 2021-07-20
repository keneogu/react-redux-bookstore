import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleChange = (e) => {
    if (e.target.tagName === 'INPUT') {
      setTitle(e.target.value);
    } else if (e.target.tagName === 'SELECT') {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      category,
    };
    if (book.title !== '') {
      props.dispatch(createBook(book));
      setTitle('');
    }
  };

  return (
    <form>
      <input type="text" placeholder="Book Form" onChange={handleChange} value={title} />
      <select name="categories" id="categories" onChange={handleChange} value={category}>
        {categories.map((category) => (
          <option key={Math.floor(Math.random() * 10000)} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  books: state,
});

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(BooksForm);
