import { setSearchValue } from '../../../processes/store/searchTextSlice';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const SearchInput = (value: string) => {
  const inputValue = useRef(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const changeSearchText = (text: string) => dispatch(setSearchValue({ text }));
    return () => {
      changeSearchText(inputValue.current);
    };
  }, [dispatch]);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
};

export { SearchInput };
