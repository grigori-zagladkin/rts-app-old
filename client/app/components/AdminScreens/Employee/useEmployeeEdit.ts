import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { keys } from 'ts-transformer-keys'
import { IUpdateEmployee } from 'types/employee.types'

import { EmployeesService } from '@/services/employees.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useEmployeeEdit = (setValue: UseFormSetValue<IUpdateEmployee>) => {
	const { query, push } = useRouter()

	const employeeId = Number(query.id)

	const { isLoading } = useQuery(['employee', employeeId], () => EmployeesService.getEmployeeById(employeeId), {
		onSuccess({ data }) {
			let _keys = keys<IUpdateEmployee>()
			_keys.forEach((key) => {
				setValue(key, data[key])
			})
		},
		onError(error) {
			toastError(error, 'Не удалось получить информацию')
		},
	})

	const { mutateAsync } = useMutation({
		mutationKey: ['update employee'],
		mutationFn: (data: IUpdateEmployee) => EmployeesService.updateEmployee(employeeId, data),
		onSuccess: () => {
			toastr.success('update employee', 'update was successfully')
			push(getAdminUrl(''))
		},
		onError: (error) => {
			toastError(error, 'update employee')
		},
	})

	const onSubmit: SubmitHandler<IUpdateEmployee> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
