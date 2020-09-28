import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ProductItem from '../product-item/ProductItem';

const ProductList = (props) => (
  <Table className='product-list' striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {!props.products || !props.products.length ? (
        <tr>
          <td colSpan='3'>No products</td>
        </tr>
      ) : (
        props.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onDelete={props.onDelete}
            ></ProductItem>
          );
        })
      )}
    </tbody>
  </Table>
);

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
