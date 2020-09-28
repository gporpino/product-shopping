import React from 'react';

import { Table } from 'react-bootstrap';

const ProductList = (props) => (
  <Table className='product-list' striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
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
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          );
        })
      )}
    </tbody>
  </Table>
);
export default ProductList;
