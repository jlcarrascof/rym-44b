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

  const getStatusBadgeClass = () => {
    if (status === 'Alive') return style.statusAlive;
    if (status === 'Dead') return style.statusDead;
    return style.statusUnknown;
  };

  return (
    <div className={style.container} role="article">
      <div className={style.topBar}>
        {pathname === '/home' && onClose ? (
          <button
            onClick={() => onClose(id)}
            aria-label={`Close card for ${name}`}
            className={style.closeBtn}
          >
            ✕
          </button>
        ) : (
          <div />
        )}
        <span className={style.idBadge}>#{id}</span>
        <button
          onClick={handleFavorite}
          aria-label={isFav ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          className={style.favBtn}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <Link to={`/detail/${id}`} className={style.charName} aria-label={`View details for ${name}`}>
        {name}
      </Link>

      <div className={style.badgeGroup}>
        <span className={`${style.statusBadge} ${getStatusBadgeClass()}`}>
          {status === 'Alive' ? '🟢 Alive' : status === 'Dead' ? '🔴 Dead' : '⚪ unknown'}
        </span>
        <span className={style.infoText}>• {species}</span>
      </div>

      <p className={style.infoText}>{gender}</p>
      <p className={style.infoText} style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
        📍 {typeof origin === 'object' ? origin.name : origin}
      </p>

      <div className={style.imgWrapper}>
        <img src={image} alt={name} />
      </div>
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
