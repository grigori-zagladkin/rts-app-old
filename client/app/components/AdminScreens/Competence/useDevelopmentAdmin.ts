import { useQuery } from '@tanstack/react-query'

import { IOption } from '@/components/UI/Select'

import { DevelopmentsService } from '@/services/developments.service'

import { toastError } from '@/utils/toastrError'

export const useDevelopmentAdmin = () => {
	const queryData = useQuery({
		queryKey: ['list of developments'],
		queryFn: () => DevelopmentsService.getAllDevelopments(''),
		select: ({ data }) =>
			data.map(
				(development): IOption => ({
					label: development.title,
					value: development.id,
				}),
			),
		onError: (error) => {
			toastError(error, 'Ошибка при получении данных о разработках')
		},
	})
	return queryData
}
