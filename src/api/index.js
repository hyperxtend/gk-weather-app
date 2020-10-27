import axios from 'axios';

const getWeatherConditions = async ({ latitude, longitude, APIKey }) => {
  const response = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
    )
    .then((result) => result.data)
    .catch((error) => error);
  return response;
};
export default getWeatherConditions;
