import React, { useEffect, useState } from 'react';
import getProducts from './api/products-api';

interface IProduct {
  created_at: string;
  description: string;
  alt_description: string;
  id: string;
  tags: {
    type: string;
    title: string;
    source?: object;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
    };
  };
}

const Products = ({ ...props }) => {
  const url = `https://api.unsplash.com/search/photos?orientation=landscape&per_page=100&query=${props.query}&client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`;
  const [cards, setCards] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProducts(url);
      console.log(response.results);
      setCards(response.results);
    };

    getData();
  }, [props.query, url]);

  return (
    <div className="cards">
      {cards.map(({ description, alt_description, urls }, i) => {
        return (
          <div role="card" data-testid={i.toString()} key={i} className="card">
            <div
              className="card__picture"
              style={{ backgroundImage: `url(${urls.regular})` }}
            ></div>
            <p className="card__description">{description || alt_description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
