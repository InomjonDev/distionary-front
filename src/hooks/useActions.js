import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions as searchActions } from "../store/slice/search.slice";
import { actions as categoryActions } from "../store/slice/category.slice";

const rootActions = {
	...searchActions,
	...categoryActions
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch);
	}, [dispatch]);
};
