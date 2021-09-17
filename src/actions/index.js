import axios from 'axios';

import {
  CHANGE_COORDINATE,
  GET_WEATHER_DATA,
  NOT_FOUND,
  TOGGLE_TAB,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_COVID_DATA,
  TOGGLE_CONTENT_TAB,
} from './type';
import { adjustLng } from '../helpers.js';

export const changeCoordinate = coords => {
  const newCoords = adjustLng(coords);

  return {
    type: CHANGE_COORDINATE,
    payload: newCoords,
  };
};

export const getWeatherData = coords => async dispatch => {
  try {
    // 用helper function解決經度大於180或小於-180的問題(因為這個weatherAPI超過數值會404)
    const newCoords = adjustLng(coords);

    const { data } = await axios.get(
      'https://weatherapi-com.p.rapidapi.com/forecast.json',
      {
        params: {
          q: `${newCoords.lat},${newCoords.lng}`,
          days: '3',
        },
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key':
            '7baa4d3e50msh380965153b7a593p16e792jsnaf0432193e70',
        },
      }
    );

    dispatch({ type: GET_WEATHER_DATA, payload: data });
  } catch (e) {
    // console.log(e);
    dispatch({ type: NOT_FOUND, payload: e });
  }
};

export const toggleTab = tab => {
  return {
    type: TOGGLE_TAB,
    payload: tab,
  };
};

export const addFavorite = coords => {
  return {
    type: ADD_FAVORITE,
    payload: coords,
  };
};

export const deleteFavorite = coords => {
  return {
    type: DELETE_FAVORITE,
    payload: coords,
  };
};

export const getCovidData = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://covid-193.p.rapidapi.com/statistics',
      {
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key':
            '7baa4d3e50msh380965153b7a593p16e792jsnaf0432193e70',
        },
      }
    );

    dispatch({ type: GET_COVID_DATA, payload: data.response });
  } catch (e) {
    console.log(e);
  }
};

export const toggleContentTab = tab => {
  return {
    type: TOGGLE_CONTENT_TAB,
    payload: tab,
  };
};
