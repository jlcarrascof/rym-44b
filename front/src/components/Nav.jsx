import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import NavLinkComp from './navLink/NavLinkComp.jsx';

function Nav({ onSearch }) {

    return <div>
        <Link to='/home'>
            <button>Home</button>
        </Link>
        <NavLinkComp to='/about'>
            <button>About</button>
        </NavLinkComp>
        <SearchBar onSearch={onSearch} />
    </div>
}

export default Nav;