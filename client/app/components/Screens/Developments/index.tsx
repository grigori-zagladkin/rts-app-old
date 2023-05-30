import { FC } from 'react'
import { IDevelopment } from 'types/development.types'

import Meta from '@/utils/Meta'

const Developments: FC<{ items: IDevelopment[] }> = ({ items }) => {
	return (
		<Meta title='Разработки'>
			<section></section>
		</Meta>
	)
}

export default Developments
