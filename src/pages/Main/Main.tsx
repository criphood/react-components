import React, { Component } from 'react';
import Products from '../../widgets/products/Products';
import Search from '../../widgets/search/Search';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Search />
        <Products />
      </div>
    );
  }
}
export default Main;
