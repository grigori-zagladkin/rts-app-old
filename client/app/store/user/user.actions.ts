import { createAsyncThunk } from '@reduxjs/toolkit'

import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/api/api.helper'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	getAuthUrl('registration'),
	async (data, thunkApi) => {
		try {
			return await AuthService.main('registration', data)
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(getAuthUrl('login'), async (data, thunkApi) => {
	try {
		return await AuthService.main('login', data)
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})

export const logout = createAsyncThunk('_', async () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(getAuthUrl('/refresh'), async (_, thunkApi) => {
	try {
		return await AuthService.refresh()
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			thunkApi.dispatch(logout())
		}
		return thunkApi.rejectWithValue(error)
	}
})
