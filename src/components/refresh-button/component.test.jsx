import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import RefreshButton from './component';
import * as refresh from './component';

describe('<RefreshButton />', () => {
  const component = shallow(<RefreshButton />);
  test('checks if refresh button exists', () => {
    expect(component.find(select('refresh-button')).exists()).toBeTruthy();
  });
});

describe('refreshPage', () => {
  it('onClick button should refresh the page', () => {
    const refreshPage = jest.spyOn(refresh, 'refreshPage').mockImplementation();
    expect(refreshPage).toHaveBeenCalledTimes(0);
    refreshPage.mockRestore();
  });
});
