import { FC } from 'react'

import AdminLayout from '@/components/Layout/AdminLayout'
import AdminTable from '@/components/UI/AdminTable'
import Heading from '@/components/UI/Heading'

import Meta from '@/utils/Meta'

import { useDevelopments } from './useDevelopments'

const DevelopmentsListManage: FC = () => {
	const { handleSearch, isLoading, data, searchTerm, createAsync, deleteAsync } = useDevelopments()
	return (
		<Meta title='Список разработок'>
			<AdminLayout>
				<Heading>Список разработок</Heading>
				<AdminTable
					headerItems={['Название', 'Описание']}
					handleSearch={handleSearch}
					isLoading={isLoading}
					onClick={createAsync}
					tableItems={data || []}
					removeHandler={deleteAsync}
					searchTerm={searchTerm}
				/>
			</AdminLayout>
		</Meta>
	)
}

export default DevelopmentsListManage
