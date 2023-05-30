import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'
import { TypeComponentAuthFields } from 'types/auth.types'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { getRefreshToken } from '@/services/auth/auth.helper'

const DynamicCheckRole = dynamic(() => import(`./CheckRole`), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()
	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) logout()
	}, [pathname])
	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
