import React, { Component } from 'react';
import navigate from '../../navigate';

import ProductForm from '../../components/productform/ProductForm.component';

class ProductNew extends Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.form = React.createRef();

    this.state = {
      id: null,
      submitted: false,
    };
  }

  service() {
    return this.props.service;
  }

  onSave(data) {
    this.service()
      .create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          submitted: true,
        });
        this.handleSuccess();
      })
      .catch((e) => {
        this.handleError(e);
      });
  }

  handleSuccess() {
    if (this.state.submitted) {
      navigate.to('/products');
    }
  }

  handleError(e) {
    this.form.current.setErrorMessages(e.response.data);
  }

  render() {
    return <ProductForm ref={this.form} onSave={this.onSave}></ProductForm>;
  }
}
export default ProductNew;
