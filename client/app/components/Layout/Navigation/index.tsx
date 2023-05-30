import Link from 'next/link'
import { FC } from 'react'
import { TbAntenna } from 'react-icons/tb'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<header className={styles.headerWrapper}>
			<div className={styles.innerWrapper}>
				<Link href={'/'}>
					<div className={styles.logoBlock}>
						<div className={styles.logoImage}>
							<TbAntenna />
						</div>
						<div className={styles.logoText}>
							<div>институт</div>
							<div>радиотехнических</div>
							<div>систем</div>
						</div>
					</div>
				</Link>
				<nav className={styles.navBlock}>
					<ul>
						<li>
							<Link href={''} className={styles.navItem}>
								Компетенции
							</Link>
						</li>
						<li>
							<Link href={''} className={styles.navItem}>
								Разработки
							</Link>
						</li>
						<li>
							<Link href={''} className={styles.navItem}>
								Сотрудники
							</Link>
						</li>
						<li>
							<Link href={''} className={styles.navItem}>
								Курсы
							</Link>
						</li>
						<li>
							<Link href={''} className={styles.navItem}>
								События
							</Link>
						</li>
						<li>
							<Link href={''} className={styles.navItem}>
								Курсы
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navigation
