import PropTypes from 'prop-types';
import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.wrapper}>
      <h1 className={style.heroTitle}>Rick & Morty Multiverse Explorer</h1>
      <p className={style.heroSubtitle}>
        Explore dimensions, search by ID, and save your favorite characters.
      </p>

      <div className={style.container}>
        {characters && characters.length > 0 ? (
          characters.map((char) => (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={typeof char.origin === 'object' ? char.origin.name : char.origin}
              image={char.image}
              onClose={onClose}
            />
          ))
        ) : (
          <p className={style.emptyState}>
            No characters added yet. Enter an ID (1-826) above or click Random 🎲!
          </p>
        )}
      </div>
    </div>
  );
}

Cards.propTypes = {
  characters: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};
