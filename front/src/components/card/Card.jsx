import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
    <div className={style.container} role="article">
      <div>
        {pathname === '/home' && onClose && (
          <button
            onClick={() => onClose(id)}
            aria-label={`Close card for ${name}`}
          >
            X
          </button>
        )}
        <button
          onClick={handleFavorite}
          aria-label={isFav ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`} aria-label={`View details for ${name}`}>
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

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
