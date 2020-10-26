import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import WeatherPage from './component';

describe('<WeatherPage />', () => {
  const component = shallow(<WeatherPage />);

  it('checks if user coordinates exists', () => {
    expect(component.find(select('user-coordinates')).exists()).toBeTruthy();
  });
});
