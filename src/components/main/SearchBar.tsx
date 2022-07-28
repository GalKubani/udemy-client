import React, { useState } from 'react';

const SearchBar = ({ onSearchAttempt }: any) => {
  const onAttemptSearch = (e: any) => {
    e.preventDefault();
    let allInputs = document
      .getElementsByClassName('search-bar')[0]
      .getElementsByClassName('text_input');
    let searchData = {};
    onSearchAttempt(searchData);
  };
  return (
    <div className="search-bar-container">
      <form onSubmit={onAttemptSearch} className="search-bar">
        <div className="search-bar-header">
          <button type="submit" className="button-logo">
            <svg className="svg-search-icon" role="img" viewBox="0 0 19.9 19.7">
              <g fill="none" stroke="black">
                <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </button>
          <input
            className="searchbar-header-input"
            type="text"
            placeholder="Search for anything"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
