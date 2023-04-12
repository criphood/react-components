import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICard from '../../widgets/cards/types/types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.unsplash.com/search/`,
  }),
  endpoints: (build) => ({
    getCards: build.query<{ total: number; totalPages: number; results: ICard[] }, string>({
      query: (text = 'random') =>
        `photos?orientation=landscape&per_page=100&query=${text}&client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`,
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
