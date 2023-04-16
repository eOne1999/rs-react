import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src="./src/assets/logo.svg" alt="PhotoStock logo" className="logo__img" />
        </a>
      </div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
      <nav className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/forms">Forms</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
