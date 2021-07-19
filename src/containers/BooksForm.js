import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createBook from '../actions/index';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  
  return (
    <form>
      <input type="text" placeholder="Book Form" />
      <select name="categories" id="categories">
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

export default BooksForm;
