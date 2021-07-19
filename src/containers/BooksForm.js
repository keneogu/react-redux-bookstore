import React, { useState } from 'react';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    if (e.target.tagName === 'input') {
      setTitle = e.target.value;
    }else if (e.target.tagName === 'select') {
      setCategory = e.target.value;
    }
  }

  return (
    <form>
      <input type="text" placeholder="Book Form" onChange={handleChange} value={title}/>
      <select name="categories" id="categories" onChange={handleChange} value={category}>
        {categories.map((category) => (
          <option key={Math.random} value={category.id}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
