import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable'

import { useDebounce } from '@/hooks/useDebounce'

import { CompetenciesService } from '@/services/competencies.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useCompetencies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['Список компетений', debouncedSearch],
		() => CompetenciesService.getAllCompetencies(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(course): ITableItem => ({
						id: course.id,
						editUrl: getAdminUrl(`/competencies/${course.id}`),
						items: [course.title, course.description.slice(0, 10) + '...'],
					}),
				),
			onError: (error) => {
				toastError(error, 'Список компетений')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => 	{
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['Создать информацию о компетенции'],
		mutationFn: () => CompetenciesService.createCompetence(),
		onError: (error) => {
			toastError(error, 'Создать информацию о компетенции')
		},
		onSuccess: ({ data: id }) => {
			toastr.success('Создать инофрмацию о компетенции', 'Успешно')
			push(getAdminUrl(`competencies/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['Удалить информацию о компетенции'],
		mutationFn: (courseId: number) => CompetenciesService.deleteCompetence(courseId),
		onError: (error) => {
			toastError(error, 'Удалить информацию')
		},
		onSuccess: () => {
			toastError('Удалить информацию', 'Уcпешно')
			queryData.refetch()
		},
	})

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			createAsync,
			deleteAsync,
		}),
		[queryData, searchTerm, createAsync, deleteAsync],
	)
}
