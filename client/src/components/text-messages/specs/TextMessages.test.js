import React from 'react';
import { shallow } from 'enzyme';

import TextMessages from '../TextMessages.component';

const mockMessages = ['has been taken', 'too big'];

test('renders without message', () => {
  const wrapper = shallow(<TextMessages />);
  expect(wrapper.children().length).toBe(0);
});

test('renders with messages', () => {
  const wrapper = shallow(<TextMessages messages={mockMessages} />);
  expect(wrapper.children().length).toBe(1);
  expect(wrapper.find('.text-messages').length).toBe(1);
  expect(wrapper.find('.text-messages').text()).toBe(mockMessages.join(', '));
});
