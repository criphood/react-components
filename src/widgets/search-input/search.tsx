import React, { useEffect, useState } from 'react';
import { getState, setState } from './utils/utils';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue(getState());
  }, []);

  useEffect(() => {
    return () => {
      setState(inputValue);
    };
  });

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
