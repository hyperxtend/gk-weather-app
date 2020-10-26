import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import SiteContainer from './component';

describe('<SiteContainer />', () => {
  const component = shallow(<SiteContainer />);

  it('checks if site container exists', () => {
    expect(component.find(select('site-container')).exists()).toBe(true);
  });
});
