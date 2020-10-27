import axios from 'axios';

import APIKey from './constants';

import getWeatherConditions from './index';

jest.mock('axios');

describe('getWeatherConditions', () => {
  it('should returns the name of the county', async () => {
    axios.get.mockResolvedValue({
      data: {
        coord: { lon: 18.63, lat: -33.96 },
        dt: 1603793396,
        id: 3370147,
        main: {
          temp: 20.33,
          feels_like: 15.65,
          temp_min: 20,
          temp_max: 21.11,
          pressure: 1012,
        },
        name: 'Belhar',
        sys: {
          type: 1,
          id: 1899,
          country: 'ZA',
          sunrise: 1603770570,
          sunset: 1603818535,
        },
        timezone: 7200,
        visibility: 10000,
      },
    });
    const expected = 'ZA';
    const mockLatitude = -33.96;
    const mockLongitude = 18.63;

    const mockAPICall = await getWeatherConditions(
      mockLatitude,
      mockLongitude,
      APIKey
    );
    expect(mockAPICall.sys.country).toStrictEqual(expected);
  });
});
