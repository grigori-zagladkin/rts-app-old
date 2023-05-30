import { IEvent, IUpdateEvent } from 'types/event.types'

import { getEventUrl } from '@/config/api.config'

import { axiosClassic, instance } from '@/api/api.interceptor'

export const EventsService = {
	async getEventBySlug(slug: string) {
		return await axiosClassic.get<IEvent>(getEventUrl(`by-slug/${slug}`))
	},
	async getAllEvents(searchTerm?: string) {
		return await axiosClassic.get<IEvent[]>(getEventUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async createEvent() {
		return await instance.post<number>(getEventUrl(''))
	},
	async getEventById(id: number) {
		return await instance.get<IEvent>(getEventUrl(`${id}`))
	},
	async updateEvent(id: number, dto: IUpdateEvent) {
		return await instance.patch<IEvent>(getEventUrl(`${id}`), dto)
	},
	async deleteEvent(id: number) {
		return (await instance.delete<IEvent>(getEventUrl(`${id}`))).data
	},
}
