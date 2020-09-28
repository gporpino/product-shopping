import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import ProductList from '../../components/product-list/ProductList.component';

class ProductIndex extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);

    this.state = {
      products: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: '',
      service: props.service,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  service() {
    return this.props.service;
  }

  getProducts() {
    this.service()
      .getAll()
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onDelete(id) {
    this.service()
      .delete(id)
      .then((response) => {
        this.getProducts();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className='product-index'>
        <div className='d-flex'>
          <div className='p-0 '>
            <h1>Products</h1>
          </div>
          <div className='p-2 ml-auto'>
            <Button href='/products/new'>New</Button>
          </div>
        </div>

        <hr />
        <ProductList
          products={this.state.products}
          onDelete={this.onDelete}
        ></ProductList>
      </div>
    );
  }
}

export default ProductIndex;

ProductIndex.propTypes = {
  service: PropTypes.object.isRequired,
};
