import { ICompetence, IUpdateCompetence } from 'types/competence.types'

import { getCompetenceUrl } from '@/config/api.config'

import { axiosClassic, instance } from '@/api/api.interceptor'

export const CompetenciesService = {
	async getCompetenceBySlug(slug: string) {
		return await axiosClassic.get<ICompetence>(getCompetenceUrl(`by-slug/${slug}`))
	},
	async getAllCompetencies(searchTerm?: string) {
		return await axiosClassic.get<ICompetence[]>(getCompetenceUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async createCompetence() {
		return await instance.post<number>(getCompetenceUrl(''))
	},
	async getCompetenceById(id: number) {
		return await instance.get<ICompetence>(getCompetenceUrl(`${id}`))
	},
	async updateCompetence(id: number, dto: IUpdateCompetence) {
		return await instance.patch<ICompetence>(getCompetenceUrl(`${id}`), dto)
	},
	async deleteCompetence(id: number) {
		return await instance.delete<ICompetence>(getCompetenceUrl(`${id}`))
	},
}
