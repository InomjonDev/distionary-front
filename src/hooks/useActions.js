import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as categoryActions } from '../store/slice/category.slice'
import { actions as searchActions } from '../store/slice/search.slice'

const rootActions = {
	...searchActions,
	...categoryActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}
