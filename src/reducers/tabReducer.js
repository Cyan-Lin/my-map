import { TOGGLE_TAB } from '../actions/type';

export const tabReducer = (state = 'hourly-forecast', action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.payload;
    default:
      return state;
  }
};
