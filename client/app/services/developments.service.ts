import { IDevelopment, IUpdateDevelopment } from 'types/development.types'

import { getDevelopmentUrl } from '@/config/api.config'

import { axiosClassic, instance } from '@/api/api.interceptor'

export const DevelopmentsService = {
	async getDevelopmentBySlug(slug: string) {
		return await axiosClassic.get<IDevelopment>(getDevelopmentUrl(`by-slug/${slug}`))
	},
	async getAllDevelopments(searchTerm?: string) {
		return await axiosClassic.get<IDevelopment[]>(getDevelopmentUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async createDevelopment() {
		return await instance.post<number>(getDevelopmentUrl(''))
	},
	async getDevelopmentById(id: number) {
		return await instance.get<IDevelopment>(getDevelopmentUrl(`${id}`))
	},
	async updateDevelopment(id: number, dto: IUpdateDevelopment) {
		return await instance.patch<IDevelopment>(getDevelopmentUrl(`${id}`), dto)
	},
	async deleteDevelopment(id: number) {
		return await instance.delete<IDevelopment>(getDevelopmentUrl(`${id}`))
	},
}
