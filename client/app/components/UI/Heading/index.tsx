import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

export interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return <h1 className={clsx('text-xl text-white font-bold', className)}>{children}</h1>
}

export default Heading
