import { useQuery } from '@tanstack/react-query'

import { IOption } from '@/components/UI/Select'

import { EmployeesService } from '@/services/employees.service'

import { toastError } from '@/utils/toastrError'

export const useEmployeeAdmin = () => {
	const queryData = useQuery({
		queryKey: ['list of employees'],
		queryFn: () => EmployeesService.getAllEmployees(''),
		select: ({ data }) =>
			data.map(
				(employee): IOption => ({
					label: employee.firstName + '' + employee.secondName,
					value: employee.id,
				}),
			),
		onError: (error) => {
			toastError(error, 'Ошибка при получении данных о сотрудниках')
		},
	})
	return queryData
}
