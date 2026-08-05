import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch character detail:', err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setCharacter({});
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
        <h2>Loading character details...</h2>
      </div>
    );
  }

  return (
    <div>
      {character.name ? (
        <div>
          <h2>ID: {character.id}</h2>
          <h2>Name: {character.name}</h2>
          <h4>Status: {character.status}</h4>
          <h4>Species: {character.species}</h4>
          <h4>Gender: {character.gender}</h4>
          <h4>Origin: {typeof character.origin === 'object' ? character.origin.name : character.origin}</h4>
          <img src={character.image} alt={character.name} />
        </div>
      ) : (
        <h2>Character not found</h2>
      )}
    </div>
  );
}

export default Detail;