import type { AppProps } from 'next/app'
import App from 'next/app'
import { TypeComponentAuthFields } from 'types/auth.types'

import '@/assets/styles/globals.scss'

import MainProvider from '@/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

MyApp.getInitialProps = async (appContext: any) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

export default MyApp
