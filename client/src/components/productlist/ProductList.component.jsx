import React, { Component } from 'react';

import { Table, Button } from 'react-bootstrap';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    this.props.onDelete(id);
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
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => {
                        if (window.confirm(`Delete ${product.name}?`)) {
                          this.onDelete(product.id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    );
  }
}

export default ProductList;
