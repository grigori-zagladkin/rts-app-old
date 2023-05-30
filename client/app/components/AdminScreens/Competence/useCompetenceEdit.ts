import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { IUpdateCompetence } from 'types/competence.types'

import { CompetenciesService } from '@/services/competencies.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useCompetenceEdit = (setValue: UseFormSetValue<IUpdateCompetence>) => {
	const { query, push } = useRouter()
	const competenceId = Number(query.id)
	const { isLoading } = useQuery({
		queryKey: ['get competence by id', competenceId],
		queryFn: () => CompetenciesService.getCompetenceById(competenceId),
		onSuccess: ({ data }) => {
			setValue('description', data['description'])
			setValue('imagesPath', data['imagesPath'])
			setValue('title', data['title'])
		},
		onError: (error) => {
			toastError(error, 'Ошибка при получении данных о компетенции')
		},
	})
	const { mutateAsync } = useMutation({
		mutationKey: ['update course'],
		mutationFn: (data: IUpdateCompetence) => CompetenciesService.updateCompetence(competenceId, data),
		onSuccess: () => {
			toastr.success('Обновить информацию о работнике', 'Успешно')
			push(getAdminUrl(`competencies`))
		},
		onError: (error) => {
			toastError(error, 'Не удалось обновить информацию')
		},
	})
	const onSubmit: SubmitHandler<IUpdateCompetence> = async (data) => {
		await mutateAsync(data)
	}
	return { isLoading, onSubmit }
}
