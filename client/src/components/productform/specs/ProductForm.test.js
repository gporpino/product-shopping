import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductForm from '../ProductForm.component';

const mockErrorMessages = { name: ['Have been taken'] };

test('on submit click', () => {
  const mockCallBack = jest.fn();

  const wrapper = shallow(<ProductForm onSave={mockCallBack}></ProductForm>);
  wrapper.find('.submit').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

test('on change name', () => {
  const newValue = 'NewValue';
  const wrapper = shallow(<ProductForm></ProductForm>);
  wrapper.find('.productName').simulate('change', {
    target: {
      value: newValue,
    },
  });
  expect(wrapper.instance().state.name).toEqual(newValue);
});

test('on change price', () => {
  const newValue = 10;
  const wrapper = shallow(<ProductForm></ProductForm>);
  wrapper.find('.productPrice').simulate('change', {
    target: {
      value: newValue,
    },
  });
  expect(wrapper.instance().state.price).toEqual(newValue);
});
