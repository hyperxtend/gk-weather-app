import React from 'react';
import PropTypes from 'prop-types';
import { IfFulfilled, IfPending, IfRejected, useAsync } from 'react-async';

import {
  StyledDataContainer,
  WeatherIconContainer,
} from '../styled-components';
import ErrorMessage from '../error-message';
import LoadingSpinner from '../loading-spinner';
import getWeatherConditions from '../../api';
import APIKey from '../../api/constants';
import { milesToKilometersAHour, roundOff } from '../../utils';
import RefreshButton from '../refresh-button/component';

export const getWeatherData = async (latitude, longitude, key) => {
  try {
    const response = await getWeatherConditions(latitude, longitude, key);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

const GetWeather = ({ latitude, longitude }) => {
  const asyncData = useAsync({
    promiseFn: getWeatherData,
    latitude,
    longitude,
    APIKey,
  });

  return (
    <>
      <IfRejected state={asyncData} data-qa="rejected-state">
        <ErrorMessage
          data-qa="error-message"
          errorMessage="Sorry could not retrieve weather results "
        />
      </IfRejected>
      <IfPending state={asyncData} data-qa="pending-state">
        <LoadingSpinner data-qa="loading-spinner" loadingMessage="Loading..." />
      </IfPending>
      <IfFulfilled state={asyncData} data-qa="fulfilled-state">
        {(data) => (
          <StyledDataContainer>
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
          </StyledDataContainer>
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
