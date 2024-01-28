import { api } from "./api";

export const wordListApi = api.injectEndpoints({
	endpoints: builder => ({
		createWordList: builder.mutation({
			query: wordList => ({
				body: wordList,
				url: "/create/word-list",
				method: "POST"
			}),
			invalidatesTags: [
				{
					type: "WordLists"
				}
			]
		}),
		deleteWordList: builder.mutation({
			query: wordListId => ({
				body: wordListApi,
				url: `/delete/word-list/${wordListId}`,
				method: "DELETE"
			}),
			invalidatesTags: [
				{
					type: "WordLists"
				}
			]
		})
	})
});

export const { useCreateWordListMutation, useDeleteWordListMutation } =
	wordListApi;
