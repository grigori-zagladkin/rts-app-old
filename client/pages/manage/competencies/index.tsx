import { NextPageAuth } from 'types/auth.types'

import CompetenciesListManage from '@/components/AdminScreens/Competencies/CompetenciesListManage'

const CompetenciesAdminPage: NextPageAuth = () => {
	return <CompetenciesListManage />
}

CompetenciesAdminPage.isOnlyAdmin = true

export default CompetenciesAdminPage
