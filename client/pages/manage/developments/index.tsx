import { NextPageAuth } from 'types/auth.types'

import DevelopmentsListManage from '@/components/AdminScreens/Developments/DevelopmentsListManage'

const DevelopmentsAdminPage: NextPageAuth = () => {
	return <DevelopmentsListManage />
}

DevelopmentsAdminPage.isOnlyAdmin = true

export default DevelopmentsAdminPage
