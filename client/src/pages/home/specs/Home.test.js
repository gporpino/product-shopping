import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home.page';

test('renders learn react link', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('h1').length).toBe(1);
});
