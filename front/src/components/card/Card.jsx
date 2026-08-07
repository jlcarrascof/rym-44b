import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavAsync, removeFavAsync } from '../../redux/actions';
import { Link, useLocation } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.favorites.myFavorites);

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavAsync(id));
    } else {
      setIsFav(true);
      dispatch(addFavAsync({ id, name, status, species, gender, origin, image }));
    }
  }

  useEffect(() => {
    if (myFavorites && Array.isArray(myFavorites)) {
      myFavorites.forEach((fav) => {
        if (Number(fav.id) === Number(id)) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, id]);

  return (
    <div className={style.container}>
      <div>
        {pathname === '/home' && (
          <button onClick={() => onClose(id)}>X</button>
        )}
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2 style={{ fontSize: '20px' }}>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
