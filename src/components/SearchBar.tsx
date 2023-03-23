import React from 'react';
import { SearchState } from '../types';

class SearchBar extends React.Component<object, SearchState> {
  constructor(params: SearchState) {
    super(params);
    this.state = { searchValue: localStorage.getItem('searchValue') || '' };
  }

  render() {
    const currState = this.state;
    return (
      <input
        onChange={(event) => {
          this.setState({ searchValue: event.target.value });
          localStorage.setItem('searchValue', event.target.value.toString());
        }}
        type="text"
        className="search-bar"
        placeholder="Search"
        value={currState.searchValue}
      />
    );
  }
}

export default SearchBar;
