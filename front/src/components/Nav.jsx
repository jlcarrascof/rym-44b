import SearchBar from './components/SearchBar.jsx';

function Nav() {

    return <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
}

export default Nav;