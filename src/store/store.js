import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as searchReducer } from "./slice/search.slice";
import { reducer as categoryReducer } from "./slice/category.slice";

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	search: searchReducer,
	category: categoryReducer
});

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
});
