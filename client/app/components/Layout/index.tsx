import { FC, PropsWithChildren } from 'react'

import Footer from './Footer'
import styles from './Layout.module.scss'
import Navigation from './Navigation'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Navigation />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
