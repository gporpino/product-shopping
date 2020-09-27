import React, { Component } from 'react';

import ProductService from '../../services/Product.service';
import ProductList from '../../components/productlist/ProductList.component';

class ProductIndex extends Component {
  constructor(props) {
    super(props);

    this.getProducts = this.getProducts.bind(this);

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

  getProducts() {
    ProductService.getAll()
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
        <ProductList products={this.state.products}></ProductList>
      </div>
    );
  }
}

export default ProductIndex;
