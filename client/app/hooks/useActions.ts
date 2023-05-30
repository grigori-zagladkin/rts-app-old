import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { RootActions } from '@/store/root.actions'

import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(RootActions, dispatch), [dispatch])
}
