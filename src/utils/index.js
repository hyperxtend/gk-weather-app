export const handleLocationError = (errorCode) => {
  switch (errorCode) {
    case 1:
      alert('User denied the request for Geolocation');
      break;
    case 2:
      alert('Location information is unavailable');
      break;
    case 3:
      alert('The request to get user location timed out');
      break;
    case 4:
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
    return Promise.reject(error);
  }
  alert('Geolocation is not supported by this browser');
};

export const roundOff = (number) => number.toFixed(0);

export const milesToKilometersAHour = (number) => (number * 1.609).toFixed(2);
