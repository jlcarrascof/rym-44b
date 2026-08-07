import axios from 'axios';
import { addFav, removeFav, filterCards, orderCards } from './favSlice';

export const addFavAsync = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = '/rickandmorty/fav';
      const { data } = await axios.post(endpoint, character);
      return dispatch(addFav(data));
    } catch (error) {
      console.error('Failed to add favorite:', error.message);
    }
  };
};

export const removeFavAsync = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `/rickandmorty/fav/${id}`;
      const { data } = await axios.delete(endpoint);
      return dispatch(removeFav(data));
    } catch (error) {
      console.error('Failed to remove favorite:', error.message);
    }
  };
};

export { filterCards, orderCards };
