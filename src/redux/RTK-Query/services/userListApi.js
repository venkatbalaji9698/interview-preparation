import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userListApi = createApi({
  reducerPath: "userList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchUserList: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useFetchUserListQuery } = userListApi;
