import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = "http://localhost:8000";
const API_URL = "https://distionary-back-public.onrender.com";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["WordLists", "User"],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: builder => ({
		getUser: builder.query({
			query: () => "/get/users",
			providesTags: () => [
				{
					type: "User"
				}
			]
		}),
		getWordLists: builder.query({
			query: () => "/get/word-lists",
			providesTags: () => [
				{
					type: "WordLists"
				}
			]
		})
	})
});

export const { useGetUserQuery, useGetWordListsQuery } = api;
