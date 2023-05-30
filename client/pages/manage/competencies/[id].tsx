import { NextPageAuth } from 'types/auth.types'

import CompetenceEdit from '@/components/AdminScreens/Competence/CompetenceEdit'

const CompetenciesEditPage: NextPageAuth = () => {
	return <CompetenceEdit />
}

CompetenciesEditPage.isOnlyAdmin = true

export default CompetenciesEditPage
