import React from 'react';
import { useAsync, IfFulfilled, IfPending, IfRejected } from 'react-async';
import { Spinner } from 'react-bootstrap';

import { getUsersLocation } from '../../utils';
import GetWeather from '../get-weather';

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
        <h2>Could not find your location</h2>
      </IfRejected>
      <IfPending state={asyncData} data-qa="location-pending">
        <Spinner animation="border" variant="primary" size="xl" />
        <h4>Trying to find your location...</h4>
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
