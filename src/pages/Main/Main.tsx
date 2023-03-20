import React, { Component } from 'react';
import Products from '../../widgets/products/products';
import Search from '../../widgets/search/search';

class Main extends Component {
  render() {
    return (
      <>
        <Search />
        <Products />
      </>
    );
  }
}
export default Main;
