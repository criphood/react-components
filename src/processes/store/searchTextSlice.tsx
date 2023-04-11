import { createSlice } from '@reduxjs/toolkit';

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchText = action.payload.text;
    },
  },
});

export const { setSearchValue } = searchTextSlice.actions;

export default searchTextSlice.reducer;
