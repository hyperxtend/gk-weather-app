import {
  handleLocationError,
  getUsersLocation,
  roundOff,
  milesToKilometersAHour,
  getAttributeOfWeather,
} from './index';

describe('handleLocationError', () => {
  const errorData = [
    { code: 1, message: 'User denied the request for Geolocation.' },
  ];

  test('checks if handle error function for 1st error code', () => {
    window.alert = jest.fn();
    handleLocationError(errorData[0].code);
    expect(window.alert).toBeCalledWith(errorData[0].message);
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

describe('getAttributeOfWeather', () => {
  const mockData = {
    base: 'stations',
    clouds: { all: 20, cod: 200 },
    coord: { lat: -33.96, lon: 18.61 },
    dt: 1603894963,
    id: 3370147,
    main: {
      feels_like: 11.27,
      humidity: 59,
      pressure: 1011,
      temp: 18.1,
      temp_max: 18.89,
      temp_min: 17.78,
    },
    name: 'Belhar',
    sys: {
      country: 'ZA',
      id: 1899,
      sunrise: 1603856913,
      sunset: 1603904994,
      type: 1,
      timezone: 7200,
      visibility: 10000,
    },
    weather: [
      { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
    ],

    wind: { speed: 9.8, deg: 300 },
  };
  const fallBackData = {
    base: 'No base',
    clouds: { all: 'No data', cod: 200 },
    coord: { lat: 0, lon: 0 },
    dt: 0,
    id: 0,
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: 'No city',
    sys: {
      type: 0,
      id: 0,
      country: 'GB',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [
      { id: 0, main: 'Can not find', description: 'None', icon: '04d' },
    ],

    wind: { deg: 0, speed: 0 },
  };
  test('should return mock data since attribute exists', () => {
    const mockAttribute = 'name';
    expect(getAttributeOfWeather(mockData, mockAttribute)).toStrictEqual(
      mockData
    );
  });

  test('should return fall back data since attribute does not exists', () => {
    const mockAttribute = '';
    expect(getAttributeOfWeather(mockData, mockAttribute)).toStrictEqual(
      fallBackData
    );
  });
});
