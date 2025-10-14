export const convertToCelsius = function (f) {
  const c = (f - 32) / 1.8;
  return Math.round(Math.round(c * 10) / 10);
};

export const convertToKm = function (miles) {
  const km = miles * 1.609344;
  return Math.round(Math.round(km * 10) / 10);
};

export const convertToMm = function (inches) {
  const mm = inches * 25.4;
  return Math.round(Math.round(mm * 10) / 10);
};

export const convertToInHg = function (hpa) {
  const inhg = hpa * 0.02953;
  return Math.round(Math.round(inhg * 10) / 10);
};
