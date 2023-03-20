import React, { Component } from 'react';
import Products from '../widgets/cards/products';
import Search from '../widgets/search-input/search';

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
