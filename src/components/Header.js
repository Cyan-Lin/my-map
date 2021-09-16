import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

import { connect } from 'react-redux';
import { changeCoordinate } from '../actions';

const Header = ({ changeCoordinate }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onKeyDown = e => {
    if (e.key === 'Enter') e.preventDefault();
  };

  const onLoad = props => {
    setAutocomplete(props);
  };

  const onPlaceChanged = () => {
    console.log(autocomplete.getBounds());

    if (autocomplete.getPlace().geometry) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();

      changeCoordinate({ lat, lng });
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="logo">CyMap</div>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="header__input-box">
            <input
              type="text"
              id="location"
              className="header__input"
              autoComplete="off"
              placeholder="Search and Choose"
              onKeyDown={onKeyDown}
            />
            {/* 好像加了這個就會有錯誤... */}
            {/* <a href="/#" className="btn btn--search">
              <i className="fas fa-search-location"></i>
            </a> */}
          </div>
        </Autocomplete>
      </div>
    </div>
  );
};

export default connect(null, { changeCoordinate })(Header);
