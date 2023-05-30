import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { FileService } from '@/services/file.service'

import { toastError } from '@/utils/toastrError'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string,
) => {
	uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { mutateAsync } = useMutation({
		mutationKey: ['upload image'],
		mutationFn: (data: FormData) => FileService.upload(data, folder),
		onError: (error) => {
			toastError(error, 'Ошибка при загрузке картинки')
		},
		onSuccess: ({ data }) => {
			onChange(data)
		},
	})
	const uploadImage = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (files?.length) {
				const formData = new FormData()
				formData.append('file', files[0])
				await mutateAsync(formData)
				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			}
		},
		[mutateAsync],
	)
	return useMemo(() => ({ uploadImage, isLoading }), [isLoading, uploadImage])
}
