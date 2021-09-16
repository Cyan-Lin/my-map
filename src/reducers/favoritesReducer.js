import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/type';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case DELETE_FAVORITE:
      console.log('reducer delete');
      const newAllState = [...state].filter(
        favorite =>
          !(
            favorite.lat === action.payload.lat &&
            favorite.lng === action.payload.lng
          )
      );
      return newAllState;
    default:
      return state;
  }
};
