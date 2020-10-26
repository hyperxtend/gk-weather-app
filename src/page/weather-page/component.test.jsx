import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import WeatherPage from './component';

describe('<WeatherPage />', () => {
  const component = shallow(<WeatherPage />);

  it('checks if weather page exists', () => {
    expect(component.find(select('weather-page')).exists()).toBe(true);
  });
});
