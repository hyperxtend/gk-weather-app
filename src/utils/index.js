export const handleLocationError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for Geolocation.';
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.';
    case error.TIMEOUT:
      return 'The request to get user location timed out.';
    case error.UNKNOWN_ERROR:
      return 'An unknown error occurred.';
    default:
      return 'An unknown error occurred.';
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
    Promise.reject(error);
  }
  return 'Geolocation is not supported by this browser';
};

export const roundOff = (number) => number.toFixed(0);

export const milesToKilometersAHour = (number) => (number * 1.609).toFixed(2);
