import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import { keys } from 'ts-transformer-keys'
import { IUpdateDevelopment } from 'types/development.types'

import { DevelopmentsService } from '@/services/developments.service'

import { toastError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

export const useDevelopmentEdit = (setValue: UseFormSetValue<IUpdateDevelopment>) => {
	const { query, push } = useRouter()
	const developmentId = Number(query.id)
	const { isLoading } = useQuery({
		queryKey: ['get development by id', developmentId],
		queryFn: () => DevelopmentsService.getDevelopmentById(developmentId),
		onError: (error) => {
			toastError(error, 'Не удалось получить информацию')
		},
		onSuccess: ({ data }) => {
			let _keys = keys<IUpdateDevelopment>()
			_keys.forEach((key) => {
				setValue(key, data[key])
			})
		},
	})

	const { mutateAsync } = useMutation({
		mutationKey: ['update development'],
		mutationFn: (data: IUpdateDevelopment) => DevelopmentsService.updateDevelopment(developmentId, data),
		onSuccess: () => {
			toastr.success('Обновить информацию о разработке', 'Прошло успешно')
			push(getAdminUrl(`developments`))
		},
	})

	const onSubmit: SubmitHandler<IUpdateDevelopment> = async (data) => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
