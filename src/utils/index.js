const getUsersLocation = () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const userLocation = { latitude, longitude };
          resolve(userLocation);
        },
        reject
      );
    });
  }
  return 'Geolocation is not supported by this browser';
};
export default getUsersLocation;
