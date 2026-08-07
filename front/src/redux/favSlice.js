import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.myFavorites = action.payload;
      state.allCharacters = action.payload;
    },
    addFav: (state, action) => {
      state.allCharacters = action.payload;
      state.myFavorites = action.payload;
    },
    removeFav: (state, action) => {
      state.allCharacters = action.payload;
      state.myFavorites = action.payload;
    },
    filterCards: (state, action) => {
      if (action.payload === 'All') {
        state.myFavorites = state.allCharacters;
      } else {
        state.myFavorites = state.allCharacters.filter(
          (char) => char.gender === action.payload
        );
      }
    },
    orderCards: (state, action) => {
      const sorted = [...state.myFavorites].sort((a, b) => {
        if (action.payload === 'A' || action.payload === 'ascending') {
          return a.id - b.id;
        }
        return b.id - a.id;
      });
      state.myFavorites = sorted;
    },
  },
});

export const { setFavorites, addFav, removeFav, filterCards, orderCards } = favSlice.actions;
export default favSlice.reducer;
