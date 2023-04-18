import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RespFromGet, RespPhotosSearch } from '../types';

const defaultOptions = {
  api_key: '0b86493e77ea0dd7c88d77fc646b5bf3',
  format: 'json',
  nojsoncallback: '1',
  method: 'flickr.photos.search',
  privacy_filter: '1',
  safe_search: '3',
  content_type: '1',
  extras:
    'description, date_taken, owner_name, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c,url_l, url_o',
};

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.flickr.com/services/rest/',
  }),
  endpoints: (build) => ({
    fetchCards: build.query<RespFromGet<RespPhotosSearch>, string>({
      query: (lastUrl) => {
        const urlOptions = { ...defaultOptions };
        let url = '?';
        Object.keys(urlOptions).forEach((key) => {
          url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });
        return url + lastUrl;
      },
    }),
  }),
});

export const { useFetchCardsQuery } = cardsApi;
