import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/UI/AdminTable'

import { useDebounce } from '@/hooks/useDebounce'

import { EmployeesService } from '@/services/employees.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useEmployees = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		['Список сотрудников', debouncedSearch],
		() => EmployeesService.getAllCompetencies(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(employee): ITableItem => ({
						id: employee.id,
						editUrl: getAdminUrl(`/employees/${employee.id}`),
						items: [employee.firstName, employee.secondName],
					}),
				),
			onError: (error) => {
				toastError(error, 'Список сотрудников')
			},
		},
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['Создать информацию о сотруднике'],
		mutationFn: () => EmployeesService.createEmployee(),
		onError: (error) => {
			toastError(error, 'Создать информацию о сотруднике')
		},
		onSuccess: ({ data: id }) => {
			toastr.success('Создать инофрмацию о работнике', 'Успешно')
			push(getAdminUrl(`employees/${id}`))
		},
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['Удалить информацию о сотруднике'],
		mutationFn: (employeeId: number) => EmployeesService.deleteEmployee(employeeId),
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
