import React, { Component } from 'react';
import getProducts from './api/products-api';

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
    return (
      <div className="cards">
        {products.map((item: IProduct, i) => {
          return (
            <div role="card" data-testid={i.toString()} key={i} className="card">
              <h4 className="card__title">{item.title}</h4>
              <div className="card__picture">
                <img src={item.image} alt={item.title} className="card__picture__inner" />
              </div>
              <p className="card__description">{item.description}</p>
              <div className="card__details">
                <span className="card__price">Price: {item.price}$</span>
                <span className="card__amount">Amount: {item.rating.count}</span>
                <span className="card__rating">Rating: {item.rating.rate}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
