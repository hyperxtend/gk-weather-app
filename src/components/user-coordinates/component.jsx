import React from 'react';
import { useAsync, IfFulfilled, IfPending, IfRejected } from 'react-async';

import LoadingSpinner from '../loading-spinner';
import ErrorMessage from '../error-message';
import { getUsersLocation } from '../../utils';
import GetWeather from '../weather-data';

// eslint-disable-next-line consistent-return
const useUsersLocation = async () => {
  try {
    const response = await getUsersLocation();
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};

const UserCoordinates = () => {
  const asyncData = useAsync({
    promiseFn: useUsersLocation,
  });

  return (
    <>
      <IfRejected state={asyncData} data-qa="location-rejected">
        <ErrorMessage errorMessage="Sorry could not find your location" />
      </IfRejected>
      <IfPending state={asyncData} data-qa="location-pending">
        <LoadingSpinner loadingMessage="Trying to find your location..." />
      </IfPending>
      <IfFulfilled state={asyncData} data-qa="location-fulfilled">
        {(data) => (
          <GetWeather latitude={data.latitude} longitude={data.longitude} />
        )}
      </IfFulfilled>
    </>
  );
};

export default UserCoordinates;
