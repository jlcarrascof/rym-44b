import { ADD_FAV, REMOVE_FAV } from './actionsTypes';

// * Action creators

export function addFav(payload) {
  return { 
    type: ADD_FAV, 
    payload
  };
}

export function removeFav(id) {
  return { 
    type: REMOVE_FAV, 
    payload: id 
  };
}

