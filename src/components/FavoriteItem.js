import React from 'react';
import { connect } from 'react-redux';

import { deleteFavorite, changeCoordinate } from '../actions';

const FavoriteItem = ({ data, current, deleteFavorite, changeCoordinate }) => {
  // 點擊愛心:從favorites中移除
  const onHeartClick = e => {
    e.stopPropagation();
    deleteFavorite(data);
  };

  const onClick = e => {
    e.stopPropagation();
    console.log('click coords');
    console.log(data);
    changeCoordinate(data);
  };

  return (
    <div
      onClick={onClick}
      className="list__item list__item--favorite"
      id={current ? 'list__item--current' : ''}
    >
      <p className="list__coords">{`{Lat: ${data.lat}, Lng: ${data.lng}}`}</p>
      <a onClick={onHeartClick} href="/#" className="btn btn--heart">
        <i className="fas fa-heart"></i>
        {/* <i className="far fa-heart"></i> */}
      </a>
    </div>
  );
};

export default connect(null, { deleteFavorite, changeCoordinate })(
  FavoriteItem
);
