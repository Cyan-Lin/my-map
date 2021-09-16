import {
  GET_WEATHER_DATA,
  NOT_FOUND,
  CHANGE_COORDINATE,
} from '../actions/type';

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      const { error: errFiltered, ...newState } = state;
      return { ...newState, ...action.payload };
    case NOT_FOUND:
      return { error: true };
    // 超酷! 原本不會用settimeout讓取得天氣資料的時候跑loader,後來想到再修改coords時馬上把error濾掉,就可以跑出loader了
    case CHANGE_COORDINATE:
      const { error: errFilteredWhileChangeCoords, ...anotherNewState } = state;
      return { ...anotherNewState };
    default:
      return state;
  }
};
