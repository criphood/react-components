import Cards from '../../widgets/cards/cards';
import Search, { SearchText } from '../../widgets/search-input/search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../processes/store/searchTextSlice';
import Modal from '../../widgets/modal/modal-window';

const Main = () => {
  const dispatch = useDispatch();
  const changeSearchText = (text: string) => dispatch(setSearchValue({ text }));
  const searchText = useSelector((state: SearchText) => state.searchText.searchText) || 'random';
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Search setQuery={changeSearchText} />
      <Cards query={searchText} setModalActive={setModalActive} />
      <Modal active={modalActive} setModalActive={setModalActive} />
    </>
  );
};

export default Main;
