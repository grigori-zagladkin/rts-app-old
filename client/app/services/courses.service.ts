import { ICourse, IUpdateCourse } from 'types/course.types'

import { getCourseUrl } from '@/config/api.config'

import { axiosClassic, instance } from '@/api/api.interceptor'

export const CoursesService = {
	async getCourseBySlug(slug: string) {
		return await axiosClassic.get<ICourse>(getCourseUrl(`by-slug/${slug}`))
	},
	async getAllCourses(searchTerm?: string) {
		return await axiosClassic.get<ICourse[]>(getCourseUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async createCourse() {
		return await instance.post<number>(getCourseUrl(''))
	},
	async getCourseById(id: number) {
		return await instance.get<ICourse>(getCourseUrl(`${id}`))
	},
	async updateCourse(id: number, dto: IUpdateCourse) {
		return await instance.patch<ICourse>(getCourseUrl(`${id}`), dto)
	},
	async deleteCourse(id: number) {
		return await instance.delete<ICourse>(getCourseUrl(`${id}`))
	},
}
