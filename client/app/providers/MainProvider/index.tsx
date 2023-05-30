import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { TypeComponentAuthFields } from 'types/auth.types'

import Layout from '@/components/Layout'

import { setupStore } from '@/store/index'

import AuthProvider from '../AuthProvider/AuthProvider'
import HeadProvider from '../HeadProvider'
import ReduxToast from '../ReduxToastr'

const store = setupStore()

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<AuthProvider Component={Component}>
						<ReduxToast />
						<Layout>{children}</Layout>
					</AuthProvider>
				</Provider>
			</QueryClientProvider>
		</HeadProvider>
	)
}

export default MainProvider
