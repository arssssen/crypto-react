import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "5f6e1c9d2dmsh5cb557b27868790p126403jsn5433c88336d6",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCoinDetail: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
    getCoinPriceHistory: builder.query({
      query: ({id, timePeriod}) => createRequest(`/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`)
    })
  }),
});

export const { useGetCoinsQuery, useGetCoinDetailQuery, useGetCoinPriceHistoryQuery } = cryptoApi;
