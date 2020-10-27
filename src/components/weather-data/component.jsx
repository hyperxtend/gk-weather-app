import React from 'react';
import PropTypes from 'prop-types';
import { IfFulfilled, IfPending, IfRejected, useAsync } from 'react-async';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import ErrorMessage from '../error-message';
import LoadingSpinner from '../loading-spinner';
import getWeatherConditions from '../../api';
import APIKey from '../../api/constants';
import { milesToKilometersAHour, roundOff } from '../../utils';
import RefreshButton from '../refresh-button/component';

const getWeatherData = async (latitude, longitude, key) => {
  try {
    const response = await getWeatherConditions(latitude, longitude, key);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

const StyledContainer = styled(Container)`
  width: 30%;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 2rem 1rem 2rem;

  h1,
  h2 {
    font-size: 3rem;
    padding-top: 1rem;
  }

  @media (max-width: 1480px) {
    button {
      width: 50px;
    }

    @media (max-width: 700px) {
      width: 250px;
  }
`;

const WeatherIconContainer = styled.div`
  img {
    transform: scale(1.5);
  }
`;

const GetWeather = ({ latitude, longitude }) => {
  const asyncData = useAsync({
    promiseFn: getWeatherData,
    latitude,
    longitude,
    APIKey,
  });

  return (
    <>
      <IfRejected state={asyncData} data-qa="weather-data-rejected">
        <ErrorMessage errorMessage="Sorry could not retrieve weather results " />
      </IfRejected>
      <IfPending state={asyncData} data-qa="weather-data-pending">
        <LoadingSpinner loadingMessage="Loading..." />
      </IfPending>
      <IfFulfilled state={asyncData} data-qa="weather-data-fulfilled">
        {(data) => (
          <StyledContainer>
            <RefreshButton data-qa="refresh-button" />
            <h1>{data.name}</h1>
            <h2>{roundOff(data.main.temp)}°C</h2>
            <WeatherIconContainer>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather-icon"
              />
            </WeatherIconContainer>
            <h4>
              {roundOff(data.main.temp_min)}°C / {roundOff(data.main.temp_max)}
              °C
            </h4>
            <h2>{data.weather[0].main}</h2>
            <h3>{data.weather[0].description}</h3>
            <h5>
              Wind Speed: {milesToKilometersAHour(data.wind.speed)}
              km/h
            </h5>

            <h5>Humidity: {data.main.humidity}%</h5>
          </StyledContainer>
        )}
      </IfFulfilled>
    </>
  );
};

GetWeather.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

GetWeather.defaultProps = {
  latitude: -33.96,
  longitude: 18.51,
};

export default GetWeather;
