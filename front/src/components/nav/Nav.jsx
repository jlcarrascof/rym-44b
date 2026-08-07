import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import NavLinkComp from '../navLink/NavLinkComp';
import style from './Nav.module.css';

function Nav({ onSearch }) {
  return (
    <div className={style.nav} role="navigation" aria-label="Main navigation">
      <Link to="/home" aria-label="Go to home page">
        <button>Home</button>
      </Link>
      <NavLinkComp to="/favorites" aria-label="Go to favorites page">
        <span>Favorites </span>
      </NavLinkComp>
      <NavLinkComp to="/about" aria-label="Go to about page">
        <span> About</span>
      </NavLinkComp>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Nav;