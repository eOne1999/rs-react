import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__search-bar">
        <SearchBar />
      </div>
      <nav className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
