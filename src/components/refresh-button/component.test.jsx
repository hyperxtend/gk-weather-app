import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import RefreshButton from './component';

describe('<RefreshButton />', () => {
  const component = shallow(<RefreshButton />);
  test('checks if refresh button exists', () => {
    expect(component.find(select('refresh-button')).exists()).toBeTruthy();
  });
});
