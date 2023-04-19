import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions, useAppSelector } from '../../hooks';

function SearchBar() {
  const navigate = useNavigate();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const { setSearchValue } = useActions();
  const [currSearch, setCurrSearch] = useState(searchValue || '');

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrSearch(event.target.value.toString());
  };

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchValue(event.currentTarget.value);
      navigate('/');
    }
  };

  return (
    <input
      onChange={handleInputSearch}
      onKeyDown={handleSearch}
      type="search"
      className="search-bar"
      placeholder="Search"
      value={currSearch}
    />
  );
}

export default SearchBar;
