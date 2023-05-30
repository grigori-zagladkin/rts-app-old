import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ChangeEvent, FC } from 'react'

import MaterialIcon from '../MaterialIcon'
import SearchField from '../SearchField'
import SkeletonLoader from '../SkeletonLoader'

import AdminCreationButton from './AdminCreationButton'
import styles from './AdminTable.module.scss'

export interface ITableItem {
	id: number
	editUrl: string
	items: string[]
}

export interface IAdminTableItem {
	tableItem: ITableItem
	removeHandler: () => void
}

export interface IAdminTable {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	headerItems: Array<string>
	isLoading: boolean
	tableItems: Array<ITableItem>
	removeHandler: (id: number) => void
}

const HeaderItems: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={clsx(styles.item, styles.itemHeader)}>
			{headerItems.map((value, index) => (
				<div key={index + 100000}>{value}</div>
			))}
			<div>Действия</div>
		</div>
	)
}

const AdminTable: FC<IAdminTable> = ({
	onClick,
	searchTerm,
	handleSearch,
	headerItems,
	isLoading,
	tableItems,
	removeHandler,
}) => {
	const { push } = useRouter()
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				{onClick && <AdminCreationButton onClick={onClick} />}
			</div>
			<HeaderItems headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={10} height={48} className='mt-4' />
			) : tableItems.length ? (
				tableItems.map((tableItem, index) => (
					<div className={styles.item}>
						{tableItem.items.map((value, index) => (
							<div key={index}>{value}</div>
						))}
						<div className={styles.actions}>
							<button onClick={() => push(tableItem.editUrl)}>
								<MaterialIcon name='MdEdit' />
							</button>
							<button onClick={() => removeHandler(tableItem.id)}>
								<MaterialIcon name='MdClose' />
							</button>
						</div>
					</div>
				))
			) : (
				<div className={styles.notFound}>Ничего не найдено</div>
			)}
		</div>
	)
}

export default AdminTable
