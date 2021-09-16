import React from 'react';

const ListItem = ({ data, hour }) => {
  const dateArr = data.time.split(' ')[0].split('-');

  return (
    <li className="list__item">
      <div className="list__time-date">
        <p className="list__time">{`${hour} ${hour >= 12 ? 'PM' : 'AM'}`}</p>
        <p className="list__date">{`${dateArr[1]}/${dateArr[2]}`}</p>
      </div>
      <div className="list__weather-image-box">
        <img
          src={data.condition.icon}
          alt="Weather image"
          className="list__weather-image"
        />
      </div>
      <p className="list__temperature">{`${data.temp_c.toFixed(1)}`}&deg;C</p>
      <p className="list__realfeel">
        RealFeel {`${data.feelslike_c.toFixed(1)}`}&deg;C
      </p>
      <p className="list__chance-of-rain">
        <i className="fas fa-tint"></i>
        {`${data.chance_of_rain}`}%
      </p>
    </li>
  );
};

export default ListItem;

// const ListItem = () => {
//   return (
//     <li className="list__item">
//       <div className="list__time-date">
//         <p className="list__time">0 AM</p>
//         <p className="list__date">1/10</p>
//       </div>
//       <div className="list__weather-image-box">
//         <img
//           src="//cdn.weatherapi.com/weather/64x64/night/116.png"
//           alt="Weather image"
//           className="list__weather-image"
//         />
//       </div>
//       <p className="list__temperature">37&deg;C</p>
//       <p className="list__realfeel">RealFeel 40&deg;C</p>
//       <p className="list__chance-of-rain">
//         <i className="fas fa-tint"></i>0%
//       </p>
//     </li>
//   );
// };
