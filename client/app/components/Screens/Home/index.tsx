import { FC } from 'react'

import Meta from '@/utils/Meta'

import CompetenciesHome from './Competencies'
import DevelopmentsHome from './Developments'
import EmployeesHome from './Employees'
import Main from './Main'

const Home: FC = () => {
	return (
		<Meta title='Главная'>
			<Main />
			<CompetenciesHome />
			<DevelopmentsHome />
			<EmployeesHome />
		</Meta>
	)
}

export default Home
