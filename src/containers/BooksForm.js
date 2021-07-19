import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { createBook } from '../actions/index';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    if (e.target.tagName === 'input') {
      setTitle(e.target.value);
    } else if (e.target.tagName === 'select') {
      setCategory(e.target.value);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const book = {
  //     title,
  //     category,
  //   };
  //   props.dispatch(createBook(book));
  //   setTitle('');
  //   setCategory('');
  // };

  return (
    <form>
      <input type="text" placeholder="Book Form" onChange={handleChange} value={title} />
      <select name="categories" id="categories" onChange={handleChange} value={category}>
        {categories.map((category) => (
          <option key={Math.random} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

// const mapStateToProps = (state) => ({
//   books: state,
// });

// BooksForm.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps)(BooksForm);

export default BooksForm;
