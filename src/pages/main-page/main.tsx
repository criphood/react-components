import Products from '../../widgets/cards/products';
import Search from '../../widgets/search-input/search';
import React, { useState } from 'react';

const Main = () => {
  const [query, setQuery] = useState(localStorage.getItem('cripInput') || '');

  return (
    <>
      <Search setQuery={setQuery} />
      <Products query={query} />
    </>
  );
};

export default Main;
