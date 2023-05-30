import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable'

import { useDebounce } from '@/hooks/useDebounce'

import { DevelopmentsService } from '@/services/developments.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useDevelopments = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['Список разработок', debouncedSearch],
		() => DevelopmentsService.getAllDevelopments(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(development): ITableItem => ({
						id: development.id,
						editUrl: getAdminUrl(`/developments/${development.id}`),
						items: [development.title, development.description.slice(0, 10) + '...'],
					}),
				),
			onError: (error) => {
				toastError(error, 'Список разработок')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['Создать информацию о разработке'],
		mutationFn: () => DevelopmentsService.createDevelopment(),
		onError: (error) => {
			toastError(error, 'Создать информацию о разработке')
		},
		onSuccess: ({ data: id }) => {
			toastr.success('Создать инофрмацию о разработке', 'Успешно')
			push(getAdminUrl(`developments/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['Удалить информацию о разработке'],
		mutationFn: (developmentId: number) => DevelopmentsService.deleteDevelopment(developmentId),
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
