import React, { useEffect, useState } from 'react';
import { SearchInput } from './utils/utils';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue(localStorage.getItem('cripInput') || '');
    console.log('change');
  }, []);

  SearchInput(inputValue);

  return (
    <div className="search__container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search__input"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
