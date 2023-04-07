import React, { useEffect, useState } from 'react';
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

const Products = ({ ...props }) => {
  const url = `https://api.unsplash.com/photos?query=${props.query}&client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`;
  const [cards, setCards] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response: IProduct[] = await getProducts(url);
      console.log(url);
      setCards(response);
    };

    getData();
  }, [props.query, url]);

  return (
    <div className="cards">
      {/* {cards.map(({ title, image, description, price, rating }, i) => {
        return (
          <div role="card" data-testid={i.toString()} key={i} className="card">
            <h4 className="card__title">{title}</h4>
            <div className="card__picture">
              <img src={image} alt={title} className="card__picture__inner" />
            </div>
            <p className="card__description">{description}</p>
            <div className="card__details">
              <span className="card__price">Price: {price}$</span>
              <span className="card__amount">Amount: {rating.count}</span>
              <span className="card__rating">Rating: {rating.rate}</span>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Products;
