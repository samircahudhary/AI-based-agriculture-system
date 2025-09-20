// helpers.js
import dayjs from "dayjs";

export const formatTemp = (t, unit = "C") => {
  if (t === null || t === undefined) return "--";
  const degree = Math.round(t);
  return `${degree}°${unit}`;
};

export const formatTime = (unix, tzOffset = 0) => {
  // unix seconds, tzOffset seconds
  return dayjs.unix(unix + tzOffset).utc().format("HH:mm");
};

export const formatDate = (unix, tzOffset = 0) =>
  dayjs.unix(unix + tzOffset).utc().format("ddd, MMM D");

export const aqiToText = (aqi) => {
  switch (aqi) {
    case 1: return "Good";
    case 2: return "Fair";
    case 3: return "Moderate";
    case 4: return "Poor";
    case 5: return "Very Poor";
    default: return "Unknown";
  }
};
