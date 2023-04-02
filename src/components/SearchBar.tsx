import { useState } from 'react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  return (
    <input
      onChange={(e) => {
        setSearchValue(e.target.value);
        localStorage.setItem('searchValue', e.target.value.toString());
      }}
      type="search"
      className="search-bar"
      placeholder="Search"
      value={searchValue}
    />
  );
}
