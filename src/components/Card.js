import React from 'react';

import { connect } from 'react-redux';

const Card = ({ weatherData: { current, forecast } }) => {
  if (current && forecast) {
    const dateArr = forecast?.forecastday[0].date.split('-');

    return (
      <div className="card">
        <div className="card__container">
          <div className="card__current-info">
            <div className="card__image-box">
              <img
                src={current.condition.icon}
                alt="Current weather image"
                className="card__current-image"
              />
            </div>
            <div className="card__current-temp">
              <p className="">
                {current.condition.text} {current.temp_c.toFixed(1)} &deg;C
              </p>
              <p className="">RealFeel {current.feelslike_c} &deg;C</p>
            </div>
          </div>

          <div className="card__today-info-box">
            <div className="card__today-info">
              <div className="card__today-date">
                {`${dateArr[1]}/${dateArr[2]}`}{' '}
                {('' + new Date(forecast.forecastday[0].date)).split(' ')[0]}.
              </div>
              <img
                src={forecast.forecastday[0].day.condition.icon}
                alt="Today's weather image"
                className="card__image-small"
              />
              <div className="card__chance-of-rain">
                <i className="fas fa-tint"></i>
                {forecast.forecastday[0].day.daily_chance_of_rain}%
              </div>
              <div className="card__today-peak-to-peak">
                {`${forecast.forecastday[0].day.mintemp_c.toFixed(
                  1
                )} ~ ${forecast.forecastday[0].day.maxtemp_c.toFixed(1)}`}{' '}
                &deg;C
              </div>
            </div>
          </div>
          <div className="card__forecast-info-box">
            <div className="card__forecast-info">
              <div className="card__forecast-day">
                {('' + new Date(forecast.forecastday[1].date)).split(' ')[0]}.
              </div>
              <div className="card__forecast-weather">
                <img
                  src={forecast.forecastday[1].day.condition.icon}
                  alt="Tomorrow weather image"
                  className="card__image-small"
                />
                <div className="card__chance-of-rain">
                  <i className="fas fa-tint"></i>
                  {forecast.forecastday[1].day.daily_chance_of_rain}%
                </div>
                <div className="">
                  {`${forecast.forecastday[1].day.mintemp_c.toFixed(
                    1
                  )} ~ ${forecast.forecastday[1].day.maxtemp_c.toFixed(
                    1
                  )}`}{' '}
                  &deg;C
                </div>
              </div>
            </div>
            <div className="card__forecast-info">
              <div className="card__forecast-day">
                {('' + new Date(forecast.forecastday[2].date)).split(' ')[0]}.
              </div>
              <div className="card__forecast-weather">
                <img
                  src={forecast.forecastday[2].day.condition.icon}
                  alt="Tomorrow weather image"
                  className="card__image-small"
                />
                <div className="card__chance-of-rain">
                  <i className="fas fa-tint"></i>
                  {forecast.forecastday[2].day.daily_chance_of_rain}%
                </div>
                <div className="">
                  {`${forecast.forecastday[2].day.mintemp_c.toFixed(
                    1
                  )} ~ ${forecast.forecastday[2].day.maxtemp_c.toFixed(
                    1
                  )}`}{' '}
                  &deg;C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { weatherData: state.weatherData };
};

export default connect(mapStateToProps)(Card);
