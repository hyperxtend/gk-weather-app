import React from 'react';
import { shallow } from 'enzyme';
import * as reactAsync from 'react-async';
import { select } from 'qa-utilities';

import WeatherData from './component';

describe('<WeatherData />', () => {
  const component = shallow(<WeatherData />);

  describe('Pending State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: true,
      });
    });
    test('checks if spinner exists while state is pending', () => {
      expect(
        component.find(select('weather-data-pending')).exists()
      ).toBeTruthy();
    });
  });

  describe('Fulfilled State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: false,
        isFulfilled: true,
      });
    });
    test('checks if weather data exists when state is fulfilled', () => {
      expect(
        component.find(select('weather-data-fulfilled')).exists()
      ).toBeTruthy();
    });
  });

  describe('Rejected state', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: false,
        isRejected: true,
      });
    });
    test('checks if text exists when state is rejected', () => {
      expect(
        component.find(select('weather-data-rejected')).exists()
      ).toBeTruthy();
    });
  });
});
