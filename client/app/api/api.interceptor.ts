import axios from 'axios'

import { getAccessToken, removeTokenFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { API_URL } from '@/config/api.config'

import { errorCatch, getContentType } from './api.helper'

export const axiosConfig = {
	baseURL: API_URL,
	headers: getContentType(),
}

export const axiosClassic = axios.create(axiosConfig)

export const instance = axios.create(axiosConfig)

instance.defaults.withCredentials = true

instance.interceptors.request.use((config) => {
	const accessToken = getAccessToken()
	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.refresh()
				return axiosClassic.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokenFromStorage()
				}
			}
		}
	},
)
