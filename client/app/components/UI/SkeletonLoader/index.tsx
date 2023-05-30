import clsx from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return <Skeleton {...rest} className={clsx('rounded-lg', className)} baseColor='#1F2125' highlightColor='#292A2E' />
}

export default SkeletonLoader
