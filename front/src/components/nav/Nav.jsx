import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import NavLinkComp from '../navLink/NavLinkComp';
import style from './Nav.module.css';

function Nav({ onSearch }) {
  return (
    <nav className={style.nav} role="navigation" aria-label="Main navigation">
      <div className={style.linkGroup}>
        <Link to="/home" className={style.navBtn} aria-label="Go to home page">
          Home
        </Link>
        <NavLinkComp to="/favorites" className={style.navBtn} aria-label="Go to favorites page">
          Favorites
        </NavLinkComp>
        <NavLinkComp to="/about" className={style.navBtn} aria-label="Go to about page">
          About
        </NavLinkComp>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Nav;