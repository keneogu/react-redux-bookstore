import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { handleFilterChange } = props;
  return (
    <div>
      <select onChange={handleFilterChange}>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
