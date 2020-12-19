import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInput = ({ target }) => {
    setQuery(target.value);
  };

  const handleSumbit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Please enter the key word');
    }
    onSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSumbit}>
        <button className="SearchForm-button" type="submit">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <label>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={query}
            onChange={handleInput}
            autoFocus
            placeholder="Search images"
          />
        </label>
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
