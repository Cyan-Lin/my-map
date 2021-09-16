export const adjustLng = coords => {
  let { lat, lng } = coords;

  if (lng > 0 && lng > 180) {
    if (lng < 360) {
      lng -= 360;
    } else if (lng > 360) {
      lng %= 360;
      if (lng > 180) {
        lng -= 360;
      }
    }
  } else if (lng < 0 && lng < -180) {
    if (lng > -360) {
      lng += 360;
    } else if (lng < -360) {
      lng %= 360;
      if (lng < -180) {
        lng += 360;
      }
    }
  }

  return { lat, lng };
};
