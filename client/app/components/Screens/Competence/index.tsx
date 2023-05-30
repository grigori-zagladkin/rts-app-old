import { FC } from 'react'
import { ICompetence } from 'types/competence.types'

import Heading from '@/components/UI/Heading'

import Meta from '@/utils/Meta'

const Competence: FC<{ item: ICompetence }> = ({ item }) => {
	return (
		<Meta title={item.title}>
			<section>
				<Heading>{item.title}</Heading>
				<div></div>
				<div></div>
			</section>
		</Meta>
	)
}

export default Competence
