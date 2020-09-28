import React, { Component } from 'react';

import { Table, Button } from 'react-bootstrap';

import ProductItem from '../product-item/ProductItem';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          {!this.props.products || !this.props.products.length ? (
            <tr>
              <td colSpan='3'>No products</td>
            </tr>
          ) : (
            this.props.products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  onDelete={this.props.onDelete}
                ></ProductItem>
              );
            })
          )}
        </tbody>
      </Table>
    );
  }
}

export default ProductList;
