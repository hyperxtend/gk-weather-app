import React from 'react';
import { shallow } from 'enzyme';
import * as reactAsync from 'react-async';
import { select } from 'qa-utilities';

import UserCoordinates, { useUsersLocation } from './component';

describe('<UserCoordinates />', () => {
  const component = shallow(<UserCoordinates />);

  describe('Pending State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: true,
      });
    });
    test('checks if pending state exists while state is pending', () => {
      expect(component.find(select('pending-state')).exists()).toBeTruthy();
    });

    test('checks if  loading spinner exists while state is pending', () => {
      expect(component.find(select('loading-spinner')).exists()).toBeTruthy();
    });
  });

  describe('Fulfilled State', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: false,
        isFulfilled: true,
      });
    });
    test('checks if coordinates exists when state is fulfilled', () => {
      expect(component.find(select('fulfilled-state')).exists()).toBeTruthy();
    });
  });

  describe('Rejected state', () => {
    beforeEach(() => {
      reactAsync.useAsync = jest.fn().mockReturnValue({
        isPending: false,
        isRejected: true,
      });
    });
    test('checks if rejected state exists when state is rejected', () => {
      expect(component.find(select('rejected-state')).exists()).toBeTruthy();
    });
    test('checks if error message exists when state is rejected', () => {
      expect(component.find(select('error-message')).exists()).toBeTruthy();
    });
  });
});

describe('useUsersLocation', () => {
  test('checks if users location was rejected in promise', async () => {
    await useUsersLocation().catch((error) =>
      expect(error).rejects.toThrowError(new Error(error))
    );
  });

  test('checks if users location was rejected in promise', async () => {
    await useUsersLocation().catch((error) =>
      expect(error).rejects.toThrowError(new Error(error))
    );
  });
});
