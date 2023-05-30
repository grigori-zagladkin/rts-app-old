import { IEmployee, IUpdateEmployee } from 'types/employee.types'

import { getEmployeeUrl } from '@/config/api.config'

import { axiosClassic, instance } from '@/api/api.interceptor'

export const EmployeesService = {
	async getEmployeeBySlug(slug: string) {
		return await axiosClassic.get<IEmployee>(getEmployeeUrl(`by-slug/${slug}`))
	},
	async getAllEmployees(searchTerm?: string) {
		return await axiosClassic.get<IEmployee[]>(getEmployeeUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async createEmployee() {
		return await instance.post<number>(getEmployeeUrl(''))
	},
	async getEmployeeById(id: number) {
		return await instance.get<IEmployee>(getEmployeeUrl(`${id}`))
	},
	async updateEmployee(id: number, dto: IUpdateEmployee) {
		return await instance.patch<IEmployee>(getEmployeeUrl(`${id}`), dto)
	},
	async deleteEmployee(id: number) {
		return await instance.delete<IEmployee>(getEmployeeUrl(`${id}`))
	},
}
