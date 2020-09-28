import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import ProductList from '../../components/productlist/ProductList.component';

class ProductIndex extends Component {
  constructor(props) {
    super(props);

    // this.onClick = this.onClick.bind(this);

    this.state = {
      products: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: '',
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
        console.log(response.data);
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
        <ProductList products={this.state.products}></ProductList>
      </div>
    );
  }
}

export default ProductIndex;
