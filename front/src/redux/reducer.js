import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions/actionsTypes';

const initialState = {
    myFavorites: [],
    allCharacters: []
};
    
function reducer(state = initialState, { type, payload }) {
    switch (type) {
     case ADD_FAV:
         return {
            ...state,
            myFavorites: [...state.allCharacters, payload],
            allCharacters: [...state.allCharacters, payload]  
         }
     case REMOVE_FAV:
         return {
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== Number(payload))
         }
    case FILTER:
        const filtered = state.allCharacters.filter(char => char.gender === payload)
        return {
            ...state,
            myFavorites: filtered
        }
     case ORDER:
        const orderChar = state.allCharacters.
        sort((a, b) => {
            if (payload === 'ascendente') 
                return a.id - b.id
            return b.id - a.id
        })
        return {
            ...state,
            myFavorites: [...orderChar]
        }     
     default:
        return {...state}
    }
}

export default reducer;
