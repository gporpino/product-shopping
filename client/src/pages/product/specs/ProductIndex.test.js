import React from 'react';
import { shallow, mount } from 'enzyme';

import ProductIndex from '../ProductIndex.page';

test('renders no products', () => {
  const wrapper = mount(<ProductIndex />);
  expect(wrapper.find('.product-index').length).toBe(1);
});
