import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home.page';

import Header from './containers/header/Header';
import ProductIndex from './pages/product/ProductIndex.page';
import ProductEdit from './pages/product/ProductEdit.page';
import ProductNew from './pages/product/ProductNew.page';
import ProductShow from './pages/product/ProductShow.page';
import NotFound from './pages/error/NotFound.page';

import productService from './services/Product.service';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <div className='page-container'>
          <Switch>
            <Route path='/products/new' exact>
              <ProductNew service={productService}></ProductNew>
            </Route>
            <Route
              path='/products/:id/edit'
              exact
              render={(props) => (
                <ProductEdit
                  id={props.match.params.id}
                  service={productService}
                ></ProductEdit>
              )}
            ></Route>
            <Route
              path='/products/:id'
              exact
              render={(props) => (
                <ProductShow
                  id={props.match.params.id}
                  service={productService}
                ></ProductShow>
              )}
            ></Route>

            <Route path='/products' exact>
              <ProductIndex service={productService} />
            </Route>

            <Route path='/' exact>
              <Home />
            </Route>

            <Route path='/not-found' exact>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
