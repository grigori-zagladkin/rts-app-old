import { ChangeEvent, FC } from 'react'

import MaterialIcon from '../MaterialIcon'

import styles from './SearchField.module.scss'

export interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name='MdSearch' />
			<input placeholder='Поиск' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
