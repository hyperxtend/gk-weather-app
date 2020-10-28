export const handleLocationError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      alert('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.');
      break;
    default:
      alert('An unknown error occurred.');
      break;
  }
};

export const getUsersLocation = () => {
  try {
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            const userLocation = { latitude, longitude };
            resolve(userLocation);
          },
          handleLocationError
        );
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }
  alert('Geolocation is not supported by this browser');
};

export const roundOff = (number) => number.toFixed(0);

export const milesToKilometersAHour = (number) => (number * 1.609).toFixed(2);

export const getAttributeOfWeather = (data, attribute) => {
  const keys = Object.keys(data);
  if (keys.includes(attribute) === true) {
    return data;
  }
  const fallBackData = {
    base: 'No base',
    clouds: { all: 'No data', cod: 200 },
    coord: { lat: 0, lon: 0 },
    dt: 0,
    id: 0,
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: 'No city',
    sys: {
      type: 0,
      id: 0,
      country: 'GB',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [
      { id: 0, main: 'Can not find', description: 'None', icon: '04d' },
    ],

    wind: { deg: 0, speed: 0 },
  };
  return fallBackData;
};
