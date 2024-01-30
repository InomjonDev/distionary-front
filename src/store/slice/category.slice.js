import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryTerm: ""
};

const categorySlice = createSlice({
	name: "Category",
	initialState,
	reducers: {
		setCategoryTerm: (state, { payload }) => {
			state.categoryTerm = payload;
		}
	}
});

export const { actions, reducer } = categorySlice;
