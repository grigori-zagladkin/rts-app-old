import { NextPageAuth } from 'types/auth.types'

import EmployeeEdit from '@/components/AdminScreens/Employee'

const EmployeeEditPage: NextPageAuth = () => {
	return <EmployeeEdit />
}

EmployeeEditPage.isOnlyAdmin = true

export default EmployeeEditPage
