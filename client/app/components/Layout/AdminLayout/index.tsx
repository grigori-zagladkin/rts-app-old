import { FC, PropsWithChildren } from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation'

import styles from './AdminLayout.module.scss'

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<AdminNavigation />
			<div className='ml-5 mt-10 min-w-full'>{children}</div>
		</div>
	)
}

export default AdminLayout
