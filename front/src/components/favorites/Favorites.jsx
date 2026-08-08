import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import Card from '../card/Card';
import style from './Favorites.module.css';

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.favorites.myFavorites);

  function handleOrder(event) {
    dispatch(orderCards(event.target.value));
  }

  function handleFilter(event) {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>My Favorite Multiverse Characters</h1>

      <div className={style.controlsBar}>
        <select name="filter" onChange={handleFilter} defaultValue="All" className={style.selectControl}>
          <option value="All">Show All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="order" onChange={handleOrder} defaultValue="orderChar" className={style.selectControl}>
          <option value="orderChar" disabled="disabled">
            Order by ID...
          </option>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
        </select>
      </div>

      <div className={style.grid}>
        {myFavorites && myFavorites.length > 0 ? (
          myFavorites.map((char) => (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={typeof char.origin === 'object' ? char.origin.name : char.origin}
              image={char.image}
            />
          ))
        ) : (
          <p className={style.emptyState}>No favorite characters added yet 🤍</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;