import { configureStore } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
