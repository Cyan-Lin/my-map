import { combineReducers } from 'redux';

import { coordinateReducer } from './coordinateReducer.js';
import { weatherReducer } from './weatherReducer.js';
import { tabReducer } from './tabReducer.js';
import { favoritesReducer } from './favoritesReducer.js';
import { covidReducer } from './covidReducer.js';
import { contentTabReducer } from './contentTabReducer.js';

export default combineReducers({
  coordinate: coordinateReducer,
  weatherData: weatherReducer,
  tab: tabReducer,
  favorites: favoritesReducer,
  covidData: covidReducer,
  contentTab: contentTabReducer,
});
