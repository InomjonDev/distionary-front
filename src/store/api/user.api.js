import { api } from "./api";

export const userApi = api.injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query({
			query: () => "/get/users",
			invalidatesTags: () => [
				{
					type: "User"
				}
			]
		}),
		createSignUp: builder.mutation({
			query: user => ({
				body: user,
				url: "/create/sign-up",
				method: "POST"
			}),
			invalidatesTags: () => [
				{
					type: "User"
				}
			]
		}),
		createSignIn: builder.mutation({
			query: user => ({
				body: user,
				url: "/create/sign-in",
				method: "POST"
			}),
			invalidatesTags: () => [
				{
					type: "User"
				}
			]
		}),
		getUserById: builder.query({
			query: userId => `/get/user/${userId}`,
			invalidatesTags: () => [
				{
					type: "User"
				}
			]
		})
	})
});

export const {
	useGetUserQuery,
	useGetUserByIdQuery,
	useCreateSignUpMutation,
	useCreateSignInMutation
} = userApi;
