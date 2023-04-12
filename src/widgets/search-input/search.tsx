import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchInput } from './utils/utils';

interface SearchText {
  searchText: { searchText: string };
}

const Search = ({ ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const searchText = useSelector((state: SearchText) => state.searchText.searchText);

  useEffect(() => {
    setInputValue(searchText || '');
  }, [searchText]);

  SearchInput(inputValue);

  return (
    <div className="search__container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            props.setQuery(inputValue);
          }
        }}
        className="search__input"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
export type { SearchText };
