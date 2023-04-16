import { configureStore } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';
import cardIdSlice from './cardIdSlice';
import usersSlice from './usersSlice';
import { cardsApi } from './cardsApi';

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    cardId: cardIdSlice,
    users: usersSlice,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
