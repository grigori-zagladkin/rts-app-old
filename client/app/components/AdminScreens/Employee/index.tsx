import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IUpdateEmployee } from 'types/employee.types'

import AdminLayout from '@/components/Layout/AdminLayout'

import Meta from '@/utils/Meta'

const EmployeeEdit: FC = () => {
	const {} = useForm<IUpdateEmployee>({
		mode: 'onChange',
	})
	return (
		<Meta title={''}>
			<AdminLayout></AdminLayout>
		</Meta>
	)
}

export default EmployeeEdit
