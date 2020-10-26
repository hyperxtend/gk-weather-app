import React from 'react';
import { useAsync, IfFulfilled, IfPending, IfRejected } from 'react-async';
import { Spinner } from 'react-bootstrap';

import { getUsersLocation } from '../../utils';

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
          <>
            <h2>Showing you weather for</h2>
            <h3>Latitude :{data.latitude}</h3>
            <h3>Longitude :{data.longitude}</h3>
          </>
        )}
      </IfFulfilled>
    </>
  );
};

export default UserCoordinates;
