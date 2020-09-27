import React from 'react';

import './App.css';

import Home from './pages/home/Home.page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductIndex from './pages/product/ProductIndex.page';
import Header from './containers/header/Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>

        <Switch>
          <Route path='/products'>
            <ProductIndex />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
