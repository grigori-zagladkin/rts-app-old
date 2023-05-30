import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { saveToStorage } from './auth.helper'
import { axiosClassic } from '@/api/api.interceptor'

export const AuthService = {
	async main(type: 'registration' | 'login', data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl(`${type}`),
			method: 'POST',
			data,
		})
		console.log(response.data)
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},
	async refresh() {
		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl('refresh'),
			method: 'POST',
			withCredentials: true,
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},
}
