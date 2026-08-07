import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import Card from '../Card/Card';

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.favorites.myFavorites);

  function handleOrder(evento) {
    dispatch(orderCards(evento.target.value));
  }

  function handleFilter(evento) {
    dispatch(filterCards(evento.target.value));
  }

  return (
    <div>
      <div>
        <select name="filter" onChange={handleFilter} defaultValue="All">
          <option value="All">Show All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="order" onChange={handleOrder} defaultValue="orderChar">
          <option value="orderChar" disabled="disabled">
            Order by ID...
          </option>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
        </select>
      </div>

      <div>
        <h1>Favorites</h1>
        {myFavorites && myFavorites.map((char) => (
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
        ))}
      </div>
    </div>
  );
}

export default Favorites;