import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TSearch } from '../types';

export default function SearchBar({ setSearchValue }: TSearch) {
  const navigate = useNavigate();
  const [currSearch, setCurrSearch] = useState(localStorage.getItem('searchValue') || '');

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value);
      navigate('/');
    }
  };

  return (
    <input
      onChange={(e) => {
        setCurrSearch(e.target.value);
        localStorage.setItem('searchValue', e.target.value.toString());
      }}
      onKeyDown={(e) => {
        handleSearch(e);
      }}
      type="search"
      className="search-bar"
      placeholder="Search"
      value={currSearch}
    />
  );
}
