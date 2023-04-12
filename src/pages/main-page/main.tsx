import Cards from '../../widgets/cards/cards';
import Search, { SearchText } from '../../widgets/search-input/search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../processes/store/searchTextSlice';

const Main = () => {
  const searchText = useSelector((state: SearchText) => state.searchText.searchText) || 'random';
  const dispatch = useDispatch();
  const changeSearchText = (text: string) => dispatch(setSearchValue({ text }));

  return (
    <>
      <Search setQuery={changeSearchText} />
      <Cards query={searchText} />
    </>
  );
};

export default Main;
