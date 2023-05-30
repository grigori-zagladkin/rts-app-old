import { FC } from 'react'
import { IEmployee } from 'types/employee.types'

import Meta from '@/utils/Meta'

const Employee: FC<{ item: IEmployee }> = ({ item }) => {
	return (
		<Meta title={`${item.firstName} ${item.secondName}`}>
			<div></div>
		</Meta>
	)
}

export default Employee
