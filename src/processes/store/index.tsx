import { PreloadedState, configureStore, combineReducers } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';
import cardIdSlice from './cardIdSlice';
import usersSlice from './usersSlice';
import { cardsApi } from './cardsApi';

type InitialState = PreloadedState<ReturnType<typeof rootReducer>>;

const rootReducer = combineReducers({
  searchText: searchTextSlice,
  cardId: cardIdSlice,
  users: usersSlice,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

const preloadedState: InitialState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
