import { NextPageAuth } from 'types/auth.types'

import EmployeeList from '@/components/AdminScreens/Employees/EmployeeList'

const AdminPage: NextPageAuth = () => {
	return <EmployeeList />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
