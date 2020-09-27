import React from 'react';
import { render, shallow } from 'enzyme';

import ProductList from '../ProductList.component';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 50 },
  { id: 2, name: 'Product 2', price: 100 },
  { id: 3, name: 'Product 3', price: 200 },
];

test('renders no products and match snapshot', () => {
  const wrapper = render(<ProductList />);
  expect(wrapper).toMatchSnapshot();
});

test('renders with products and match snapshot', () => {
  const wrapper = render(<ProductList />);
  expect(wrapper).toMatchSnapshot();
});

test('renders no products', () => {
  const wrapper = shallow(<ProductList />);
  expect(wrapper.find('tbody tr').length).toBe(1);
  expect(wrapper.find('tbody tr').text()).toBe('No products');
});

test('renders with products', () => {
  const wrapper = shallow(<ProductList products={mockProducts} />);
  expect(wrapper.find('tbody tr').length).toBe(3);
});
