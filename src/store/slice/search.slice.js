import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTerm: ""
};

const searchSlice = createSlice({
	name: "Search",
	initialState,
	reducers: {
		setSearchTerm: (state, { payload }) => {
			state.searchTerm = payload;
		}
	}
});

export const { actions, reducer } = searchSlice;
