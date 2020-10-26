import React from 'react';
import { shallow } from 'enzyme';
import * as reactAsync from 'react-async';
import { select } from 'qa-utilities';

import UserCoordinates from './component';

describe('<UserCoordinates />', () => {
  const component = shallow(<UserCoordinates />);

  describe('Pending State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: true,
      });
    });
    test('checks if spinner exists while state is pending', () => {
      expect(component.find(select('location-pending')).exists()).toBeTruthy();
    });
  });

  describe('Pending State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: false,
        isFulfilled: true,
      });
    });
    test('checks if coordinates exists when state is fulfilled', () => {
      expect(
        component.find(select('location-fulfilled')).exists()
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
      expect(component.find(select('location-rejected')).exists()).toBeTruthy();
    });
  });
});
