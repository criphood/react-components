import { useEffect, useRef } from 'react';

const SearchInput = (value: string) => {
  const inputValue = useRef(value);

  useEffect(() => {
    return () => {
      localStorage.setItem('cripInput', inputValue.current);
    };
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
};

export { SearchInput };
