import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from 'types/auth.types'

import { useAuth } from '@/hooks/useAuth'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const router = useRouter()
	const isAdmin = user?.role === 'ADMIN'
	const isUser = user && !isAdmin
	if (!isOnlyAdmin && !isOnlyUser) return <>{children}</>
	if (user?.role === 'ADMIN') {
		console.log('is admin')
		return <>{children}</>
	}
	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}
	if (isUser && isOnlyUser) return <>{children}</>
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
