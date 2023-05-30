import { FC } from 'react'

import AdminLayout from '@/components/Layout/AdminLayout'
import AdminTable from '@/components/UI/AdminTable'
import Heading from '@/components/UI/Heading'

import Meta from '@/utils/Meta'

import { useEmployees } from './useEmployees'

const EmployeeList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useEmployees()
	return (
		<Meta title='Список сотрудников'>
			<AdminLayout>
				<Heading>Список сотрудников</Heading>
				<AdminTable
					handleSearch={handleSearch}
					searchTerm={searchTerm}
					onClick={createAsync}
					tableItems={data || []}
					isLoading={isLoading}
					headerItems={['Имя', 'Фамилия']}
					removeHandler={deleteAsync}
				/>
			</AdminLayout>
		</Meta>
	)
}

export default EmployeeList
