import { getAdminUrl } from '@/config/url.config'

export interface INavItem {
	title: string
	link: string
}

export const adminNavItems: INavItem[] = [
	{
		title: 'Сотрудники',
		link: getAdminUrl('employees'),
	},
	{
		title: 'Компетенции',
		link: getAdminUrl('comptencies'),
	},
	{
		title: 'Разработки',
		link: getAdminUrl('developments'),
	},
	{
		title: 'Новости',
		link: getAdminUrl('events'),
	},
	{
		title: 'Курсы',
		link: getAdminUrl('courses'),
	},
]
