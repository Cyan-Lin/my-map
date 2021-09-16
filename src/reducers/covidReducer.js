import { GET_COVID_DATA } from '../actions/type';

export const covidReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return [...action.payload];
    default:
      return state;
  }
};
