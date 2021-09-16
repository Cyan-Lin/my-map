import { TOGGLE_CONTENT_TAB } from '../actions/type';

export const contentTabReducer = (state = 'map', action) => {
  switch (action.type) {
    case TOGGLE_CONTENT_TAB:
      return action.payload;
    default:
      return state;
  }
};
