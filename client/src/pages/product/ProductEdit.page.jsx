import React, { Component } from 'react';
import PropTypes from 'prop-types';
import navigate from '../../navigate';

import ProductForm from '../../components/product-form/ProductForm.component';

class ProductEdit extends Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.form = React.createRef();

    this.state = {
      id: props.id,
      product: null,
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
        this.setState({ product: response.data });
        this.updateChildFields();
      })
      .catch((e) => {
        navigate.to('/not-found');
      });
  }

  updateChildFields() {
    this.form.current.setId(this.state.product.id);
    this.form.current.setName(this.state.product.name);
    this.form.current.setPrice(this.state.product.price);
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
    if (this.state.product != null) {
      return <ProductForm ref={this.form} onSave={this.onSave}></ProductForm>;
    }
    return null;
  }
}
export default ProductEdit;

ProductEdit.propTypes = {
  id: PropTypes.number.isRequired,
  service: PropTypes.object.isRequired,
};
