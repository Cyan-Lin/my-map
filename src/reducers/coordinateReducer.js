import { CHANGE_COORDINATE } from '../actions/type';

export const coordinateReducer = (state = { lat: 0, lng: 0 }, action) => {
  switch (action.type) {
    case CHANGE_COORDINATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
