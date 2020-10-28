import {
  handleLocationError,
  getUsersLocation,
  roundOff,
  milesToKilometersAHour,
} from './index';

describe('handleLocationError', () => {
  const errorData = [
    { code: 1, message: 'User denied the request for Geolocation' },
    { code: 2, message: 'Location information is unavailable' },
    { code: 3, message: 'The request to get user location timed out' },
    { code: 4, message: 'An unknown error occurred' },
  ];

  test('checks if handle error function for 1st error code', () => {
    window.alert = jest.fn();
    handleLocationError(errorData[0].code);
    expect(window.alert).toBeCalledWith(errorData[0].message);
  });

  test('checks if handle error function for 2nd error code', () => {
    window.alert = jest.fn();
    handleLocationError(errorData[1].code);
    expect(window.alert).toBeCalledWith(errorData[1].message);
  });

  test('checks if handle error function for 3rd error code', () => {
    window.alert = jest.fn();
    handleLocationError(errorData[2].code);
    expect(window.alert).toBeCalledWith(errorData[2].message);
  });

  test('checks if handle error function for 4th error code', () => {
    window.alert = jest.fn();
    handleLocationError(errorData[3].code);
    expect(window.alert).toBeCalledWith(errorData[3].message);
  });

  test('checks if handle error function for any other error code', () => {
    window.alert = jest.fn();
    const errorCode = 23;
    handleLocationError(errorCode);
    expect(window.alert).toBeCalledWith(errorData[3].message);
  });
});

describe('getUsersLocation', () => {
  test('should return users coordinates', async () => {
    const location = {
      coords: {
        latitude: -33.96,
        longitude: 18.89,
      },
    };

    const expectedCoordinates = [
      location.coords.latitude,
      location.coords.longitude,
    ];

    navigator.geolocation = {
      getCurrentPosition: jest.fn((callback) => {
        callback(location);
      }),
    };

    const { latitude, longitude } = await getUsersLocation();

    expect(navigator.geolocation.getCurrentPosition.mock.calls.length).toEqual(
      1
    );
    expect(latitude).toEqual(expectedCoordinates[0]);
    expect(longitude).toEqual(expectedCoordinates[1]);

    delete navigator.geolocation;
  });
});

describe('roundOff', () => {
  test('should round off numbers to 0 decimals', () => {
    const mockNumber = 3.14159265359;
    const expected = '3';
    expect(roundOff(mockNumber)).toBe(expected);
  });
});

describe('milesToKilometersAHour', () => {
  test('should convert miles per hour to kilometers per hour', () => {
    const mockNumber = 25.12;
    const expected = '40.42';
    expect(milesToKilometersAHour(mockNumber)).toBe(expected);
  });
});
