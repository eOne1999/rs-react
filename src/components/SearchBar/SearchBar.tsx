import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TSearch } from '../../types';

export default function SearchBar({ setSearchValue }: TSearch) {
  const navigate = useNavigate();
  const [currSearch, setCurrSearch] = useState(localStorage.getItem('searchValue') || '');

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrSearch(e.target.value);
    localStorage.setItem('searchValue', e.target.value.toString());

    if (e.target.value === '') {
      setSearchValue(e.target.value);
    }
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value);
      navigate('/');
    }
  };

  return (
    <input
      onChange={handleInputSearch}
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
