import React, { Component } from 'react';
import navigate from '../../navigate';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

import ConfirmButton from '../../components/confirmbutton/ConfirmButton.component';

class ProductShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      product: null,
    };
  }

  service() {
    return this.props.service;
  }

  componentDidMount() {
    this.service()
      .get(this.state.id)
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch((e) => {
        navigate.to('/not-found');
      });
  }

  onDelete() {
    this.service()
      .delete(this.state.id)
      .then((response) => {
        this.getProducts();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    if (this.state.product != null) {
      return (
        <div>
          <h2>Show Product</h2>
          <hr />
          <dl>
            <dt>Name:</dt>
            <dd>{this.state.product.name}</dd>
            <dt>Price:</dt>
            <dd>{this.state.product.price}</dd>
          </dl>
          <hr />
          <Button
            href='/products'
            variant='secondary'
            size='sm'
            className='mr-2'
          >
            Back to list
          </Button>
          <Button
            href={`/products/${this.state.product.id}/edit`}
            variant='secondary'
            size='sm'
            className='mr-2'
          >
            Edit
          </Button>
          <ConfirmButton
            size='sm'
            message={`Delete ${this.state.product.name}?`}
            onClick={this.onDelete}
          >
            Delete
          </ConfirmButton>
        </div>
      );
    }
    return null;
  }
}
export default ProductShow;

ProductShow.propTypes = {
  service: PropTypes.object.isRequired,
};
