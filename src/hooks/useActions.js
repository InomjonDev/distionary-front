import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions } from "../store/slice/search.slice";

const rootActions = {
	...actions
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch);
	}, [dispatch]);
};
