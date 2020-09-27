import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className='app-header'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
    </ul>
  </header>
);

export default Header;
