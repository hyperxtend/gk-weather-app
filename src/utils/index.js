export const handleLocationError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable');
      break;
    case error.TIMEOUT:
      alert('The request to get user location timed out');
      break;
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred');
      break;
    default:
      alert('An unknown error occurred');
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
    Promise.reject(error);
  }
  alert('Geolocation is not supported by this browser');
};

export const roundOff = (number) => number.toFixed(0);

export const milesToKilometersAHour = (number) => (number * 1.609).toFixed(2);
