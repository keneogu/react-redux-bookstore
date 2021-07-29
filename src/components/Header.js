import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';
import '../styles/Header.css';

function Header(props) {
  const { filterBook } = props;
  const handleFilterChange = (e) => {
    filterBook(e.target.value);
  };
  return (
    <div className="header">
      <div className="head-text">
        <h1 className="head-1">BookStore</h1>
        <span className="head-span-1">Books</span>
        <span className="head-span"><CategoryFilter handleFilterChange={handleFilterChange} /></span>
      </div>
      <div className="head-icon">
        <FontAwesomeIcon icon={faUser} className="icon" size="17x" />
      </div>
    </div>
  );
}

Header.propTypes = {
  filterBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterBook: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Header);
