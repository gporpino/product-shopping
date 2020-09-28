import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ConfirmButton from '../confirm-button/ConfirmButton.component';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    const product = this.props.product;
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <Button
            href={`/products/${product.id}`}
            variant='secondary'
            size='sm'
            className='mr-2'
          >
            Show
          </Button>
          <Button
            href={`/products/${product.id}/edit`}
            variant='secondary'
            size='sm'
            className='mr-2'
          >
            Edit
          </Button>
          <ConfirmButton
            size='sm'
            message={`Delete ${product.name}?`}
            onClick={() => {
              this.onDelete(product.id);
            }}
          >
            Delete
          </ConfirmButton>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
