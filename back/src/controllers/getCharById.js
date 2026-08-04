const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);

    if (!data.name) {
      return res.status(404).json({ message: 'Character not found' });
    }

    const character = {
      id: Number(data.id),
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };

    return res.status(200).json(character);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: 'Not found' });
    }
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
