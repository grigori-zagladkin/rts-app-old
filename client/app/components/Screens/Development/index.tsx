import { FC } from 'react'
import { IDevelopment } from 'types/development.types'

import Meta from '@/utils/Meta'

const Development: FC<{ item: IDevelopment }> = ({ item }) => {
	return (
		<Meta title={item.title}>
			<section></section>
		</Meta>
	)
}

export default Development
