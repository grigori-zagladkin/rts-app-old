import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { getAdminHomeUrl } from '@/config/url.config'

import Heading from '../Heading'

import { adminNavItems } from './AdminNav.data'
import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	const { asPath } = useRouter()
	return (
		<nav className={styles.nav}>
			<Heading className={styles.heading}>
				<Link href={getAdminHomeUrl()}>
					<div>Панель</div>
					<div>администратора</div>
				</Link>
			</Heading>
			<ul>
				{adminNavItems.map((item, index) => (
					<li
						key={Math.floor(Math.random() * 100000)}
						className={clsx(
							{
								[styles.active]: asPath === item.link,
							},
							styles.item,
						)}
					>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
