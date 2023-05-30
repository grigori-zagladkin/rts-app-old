import { useQuery } from '@tanstack/react-query'

import { IOption } from '@/components/UI/Select'

import { CompetenciesService } from '@/services/competencies.service'

import { toastError } from '@/utils/toastrError'

export const useCompetenciesAdmin = () => {
	const queryData = useQuery({
		queryKey: ['list of competencies'],
		queryFn: () => CompetenciesService.getAllCompetencies(),
		onError: (error) => {
			toastError(error, 'Ошибка при загрузке компетенций')
		},
		select: ({ data }) =>
			data.map(
				(competence): IOption => ({
					label: competence.title,
					value: competence.id,
				}),
			),
	})
	return queryData
}
