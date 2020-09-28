import React, { Component } from 'react';
import navigate from '../../navigate';

import ProductForm from '../../components/productform/ProductForm.component';

class ProductEdit extends Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.form = React.createRef();

    this.state = {
      id: props.id,
      submitted: false,
    };
  }

  service() {
    return this.props.service;
  }

  componentDidMount() {
    this.service()
      .get(this.state.id)
      .then((response) => {
        this.form.current.setId(response.data.id);
        this.form.current.setName(response.data.name);
        this.form.current.setPrice(response.data.price);
      })
      .catch((e) => {
        navigate.to('/not-found');
      });
  }

  onSave(data) {
    this.service()
      .update(this.state.id, data)
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
export default ProductEdit;
