import React, { Component } from 'react';
import navigate from '../../navigate';

class ProductEdit extends Component {
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
        console.log(e);
      });
  }

  render() {
    if (this.state.product != null) {
      return (
        <div>
          <h2>Show Product</h2>
          <hr></hr>
          <dl>
            <dt>Name:</dt>
            <dd>{this.state.product.name}</dd>
            <dt>Price:</dt>
            <dd>{this.state.product.price}</dd>
          </dl>
        </div>
      );
    }
    return null;
  }
}
export default ProductEdit;
