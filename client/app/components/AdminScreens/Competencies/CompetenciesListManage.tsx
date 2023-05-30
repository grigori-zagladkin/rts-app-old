import { FC } from 'react'

import AdminLayout from '@/components/Layout/AdminLayout'
import AdminTable from '@/components/UI/AdminTable'
import Heading from '@/components/UI/Heading'

import Meta from '@/utils/Meta'

import { useCompetencies } from './useComptencies'

const CompetenciesListManage: FC = () => {
	const { handleSearch, isLoading, data, searchTerm, createAsync, deleteAsync } = useCompetencies()
	return (
		<Meta title='Список компетенция'>
			<AdminLayout>
				<Heading>Список компетенций</Heading>
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

export default CompetenciesListManage
