import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICard from '../../widgets/cards/types/types';

type CardsApiRequest = { total: number; totalPages: number; results: ICard[] };

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.unsplash.com/`,
  }),
  endpoints: (build) => ({
    getCards: build.query<CardsApiRequest, string>({
      query: (text = 'random') =>
        `search/photos?orientation=landscape&per_page=100&query=${text}&client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`,
    }),
    getCardModal: build.query<ICard, string>({
      query: (id) => `/photos/${id}?client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`,
    }),
  }),
});

export const { useGetCardsQuery, useGetCardModalQuery } = cardsApi;
