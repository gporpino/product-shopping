import React, { Component } from 'react';
import navigate from '../../navigate';

import ProductService from '../../services/Product.service';
import ProductForm from '../../components/productform/ProductForm.component';

class ProductEdit extends Component {
  constructor(props) {
    super(props);

    // this.onSave = this.onSave.bind(this);

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

  onCLick() {
    if (this.state.submitted) {
      navigate.to('/products');
    }
  }

  handleError(e) {
    this.form.current.setErrorMessages(e.response.data);
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
