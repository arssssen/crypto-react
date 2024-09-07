import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const newsApiHeaders = {
  "X-RapidAPI-Key": "5f6e1c9d2dmsh5cb557b27868790p126403jsn5433c88336d6",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const createRequest = (url) => ({
  url,
  headers: newsApiHeaders,
});
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cryptocurrency-news2.p.rapidapi.com/v1",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        createRequest(
          `/coindesk`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
