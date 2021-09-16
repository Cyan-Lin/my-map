import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { Loader } from '@googlemaps/js-api-loader';

import { changeCoordinate, getWeatherData, toggleTab } from '../actions';
import Card from './Card';

const Map = ({
  changeCoordinate,
  coords,
  getWeatherData,
  weatherData,
  toggleTab,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places', 'geometry', 'drawing'],
    id: 'google api',
  });

  loader.load().then(() => {
    setIsLoaded(true);
  });

  const onChildClick = () => {
    setClicked(!clicked);
    toggleTab('hourly-forecast');
  };

  const onGoogleApiLoaded = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        changeCoordinate({ lat, lng });
      }
    );
  };

  const renderContent = () => {
    if (weatherData.current) {
      return (
        <img
          src={weatherData.current?.condition.icon}
          alt="Weather icon"
          lat={coords.lat}
          lng={coords.lng}
          className="map__icon"
        />
      );

      // 如果有error就跑error message
    } else if (weatherData.error) {
      return <p className="map__message">{'No matching location found :('}</p>;

      // 沒有資料也沒有err => 表示初始時或是沒資料且error被過濾(在coords改變時會在reducer濾掉error)
    } else {
      return (
        <div className="loader" lat={coords.lat} lng={coords.lng}>
          <div className="loader__container">
            <span className="loader__item loader__item--1"></span>
            <span className="loader__item loader__item--2"></span>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    if (coords.lat && coords.lng) {
      const fetchData = async () => {
        await getWeatherData(coords);
      };

      fetchData();
    }
  }, [coords, getWeatherData]);

  // console.log(weatherData);

  return (
    <div className="map">
      <div className="map__container">
        {isLoaded ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
              libraries: ['places', 'geometry', 'drawing'],
              version: 'weekly',
              id: 'google api',
            }}
            defaultCenter={{ lat: 0, lng: 0 }}
            defaultZoom={14}
            center={coords}
            margin={[50]}
            onGoogleApiLoaded={onGoogleApiLoaded}
            options={{
              gestureHandling: 'cooperative',
              restriction: {
                // latLngBounds設定使地圖不能往上或往下滑破圖
                latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
              },
            }}
            onChildClick={onChildClick}
            onChange={e => {
              changeCoordinate({ lat: e.center.lat, lng: e.center.lng });
              setClicked(false);
            }}
            onClick={e => changeCoordinate({ lat: e.lat, lng: e.lng })}
          >
            {/* 顯示天氣圖標 */}
            {renderContent()}
            {/* 點擊天氣圖標會跳出Card */}
            {clicked && <Card lat={coords.lat} lng={coords.lng} />}
          </GoogleMapReact>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { coords: state.coordinate, weatherData: state.weatherData };
};

export default connect(mapStateToProps, {
  changeCoordinate,
  getWeatherData,
  toggleTab,
})(Map);
