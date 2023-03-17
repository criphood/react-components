import React, { Component } from 'react';
import getProducts from './api/ProductsApi';

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

type State = { products: IProduct[] };

class Products extends Component<object, State> {
  url = 'https://fakestoreapi.com/products';

  state = {
    products: [],
  };

  async componentDidMount() {
    const products: IProduct[] = await getProducts(this.url);
    this.setState({ products: products });
  }

  render() {
    const products = this.state.products;
    return products.map((item: IProduct, i) => {
      return (
        <div key={i}>
          <img src={item.image} alt="" />
        </div>
      );
    });
  }
}

export default Products;
