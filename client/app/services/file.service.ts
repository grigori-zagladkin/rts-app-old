import { instance } from '@/api/api.interceptor'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>('/files', file, {
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	async deleteFile(fileName: string, folder: string) {
		return instance.delete<string>(`/files/${fileName}`, {
			params: {
				folder,
			},
		})
	},
}
