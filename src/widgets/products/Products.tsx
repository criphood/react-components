import React, { Component } from 'react';
import getProducts from './api/ProductsApi';
import styles from './Products.module.scss';

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
      <div className={styles.cards}>
        {products.map((item: IProduct, i) => {
          return (
            <div role="card" data-testid={i.toString()} key={i} className={styles.card}>
              <h4 className={styles.card__title}>{item.title}</h4>
              <div className={styles.card__picture}>
                <img src={item.image} alt={item.title} className={styles.card__picture__inner} />
              </div>
              <p className={styles.card__description}>{item.description}</p>
              <div className={styles.card__details}>
                <span className={styles.card__price}>Price: {item.price}$</span>
                <span className={styles.card__amount}>Amount: {item.rating.count}</span>
                <span className={styles.card__rating}>Rating: {item.rating.rate}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
