import dynamic from 'next/dynamic'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import { IUpdateCompetence } from 'types/competence.types'

import AdminLayout from '@/components/Layout/AdminLayout'
import Button from '@/components/UI/Button'
import Field from '@/components/UI/Field'
import Heading from '@/components/UI/Heading'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import Upload from '@/components/UI/Upload'

import Meta from '@/utils/Meta'

import formStyles from '../../UI/Form.module.scss'

import { useCompetenceEdit } from './useCompetenceEdit'
import { useDevelopmentAdmin } from './useDevelopmentAdmin'
import { useEmployeeAdmin } from './useEmployeeAdmin'

const DynamicTextEditor = dynamic(() => import('../../UI/TextEditor/index'), { ssr: false })

const DynamicSelect = dynamic(() => import('../../UI/Select/index'), { ssr: false })

const CompetenceEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IUpdateCompetence>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useCompetenceEdit(setValue)
	const { data: developmentData, isLoading: isDevelopmentLoading } = useDevelopmentAdmin()
	const { data: employeeData, isLoading: isEmployeeLoading } = useEmployeeAdmin()
	const [images, setImages] = useState(getValues('imagesPath'))
	return (
		<Meta title='Редактирование компетенции'>
			<AdminLayout>
				<Heading>Редактирование компетенции</Heading>
				{isLoading ? (
					<SkeletonLoader count={5} />
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
						<div>
							<Field
								{...register('title', {
									required: 'Нужно название',
								})}
								placeholder='Название компетенции'
								error={errors.title}
							/>
							<Controller
								name='description'
								control={control}
								defaultValue=''
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<DynamicTextEditor placeholder='description' onChange={onChange} error={error} value={value} />
								)}
								rules={{
									validate: {
										required: (v) => (v && stripHtml(v).result.length > 0) || 'Description is required!',
									},
								}}
							/>
							<Controller
								name='employeesId'
								control={control}
								rules={{
									required: 'Выберите сотрудников обладающей данной компетенцией',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder='Сотрудники'
										options={employeeData || []}
										isLoading={isEmployeeLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								name='developmentsId'
								control={control}
								rules={{
									required: 'Выберите разработки',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder='Разработки'
										options={developmentData || []}
										isLoading={isDevelopmentLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								name='developmentsId'
								control={control}
								rules={{
									required: 'Выберите разработки',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder='Разработки'
										options={developmentData || []}
										isLoading={isDevelopmentLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								name='imagesPath'
								control={control}
								rules={{
									required: 'Выберите изображения',
								}}
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<Upload placeholder='Изображения' error={error} folder='competencies' onChange={onChange} />
								)}
							/>
						</div>
						<Button>Обновить</Button>
					</form>
				)}
			</AdminLayout>
		</Meta>
	)
}

export default CompetenceEdit
