import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem.js';
import { toggleTab, addFavorite, deleteFavorite } from '../actions';
import FavoriteItem from './FavoriteItem.js';

const List = ({
  hourForecast,
  toggleTab,
  tab,
  favorites,
  addFavorite,
  coords,
  deleteFavorite,
}) => {
  // 先把coords=全部轉換,避免Duplicate Code
  // *toFixed()會變成string所以要把所有都變成Number,以免發生錯誤
  const fixCoords = {
    lat: Number(coords.lat.toFixed(4)),
    lng: Number(coords.lng.toFixed(4)),
  };

  // List:每小預報
  const renderHourForecast = () => {
    return hourForecast?.map((forecast, i) => (
      <ListItem key={i} data={forecast} hour={i} />
    ));
  };

  // List:最愛
  const renderFavorites = () => {
    return favorites.map((favorite, i) => {
      if (favorite.lat === fixCoords.lat && favorite.lng === fixCoords.lng) {
        return <FavoriteItem key={i} data={favorite} current={true} />;
      } else {
        return <FavoriteItem key={i} data={favorite} current={false} />;
      }
    });
  };

  // 點擊tab切換
  const onClick = (e, tab) => {
    e.preventDefault();
    toggleTab(tab);
  };

  // 點擊當前coords愛心:若favorites內有當前coords:從favorites中移除;反之則加入
  const onHeartClick = e => {
    e.preventDefault();
    if (
      favorites.some(
        favorite =>
          favorite.lat === fixCoords.lat && favorite.lng === fixCoords.lng
      )
    ) {
      deleteFavorite({
        lat: fixCoords.lat,
        lng: fixCoords.lng,
      });
    } else {
      addFavorite({
        lat: fixCoords.lat,
        lng: fixCoords.lng,
      });
    }
    toggleTab('favorites');
  };

  return (
    <div className="list">
      <div className="list__nav">
        <ul className="list__nav-list">
          <li
            className="list__nav-item"
            id={tab === 'hourly-forecast' ? 'list__nav-item--active' : ''}
          >
            <a
              onClick={e => onClick(e, 'hourly-forecast')}
              href="/#"
              className="list__nav-link"
            >
              Hourly Forecast
            </a>
          </li>
          <li
            className="list__nav-item"
            id={tab === 'favorites' ? 'list__nav-item--active' : ''}
          >
            <a
              onClick={e => onClick(e, 'favorites')}
              href="/#"
              className="list__nav-link"
            >
              Fovorites
            </a>
            <a onClick={onHeartClick} href="/#" className="btn btn--heart">
              {favorites.some(
                favorite =>
                  favorite.lat === fixCoords.lat &&
                  favorite.lng === fixCoords.lng
              ) ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </a>
          </li>
        </ul>
      </div>
      <div className="list__container">
        <ul className="list__list">
          {tab === 'hourly-forecast' ? renderHourForecast() : renderFavorites()}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hourForecast: state.weatherData.forecast?.forecastday[0].hour,
    tab: state.tab,
    favorites: state.favorites,
    coords: state.coordinate,
  };
};

export default connect(mapStateToProps, {
  toggleTab,
  addFavorite,
  deleteFavorite,
})(List);
