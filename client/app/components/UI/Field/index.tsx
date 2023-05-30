import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './Field.module.scss'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = 'text', style, ...rest }, ref) => {
	return (
		<div className={clsx(styles.common, styles.field)} style={style}>
			<label>
				<span className='mb-1 block'>{placeholder}</span>
				<input
					ref={ref}
					type={type}
					placeholder={placeholder}
					className={clsx('', {
						'border-red': !!error,
					})}
					{...rest}
					autoComplete='off'
				/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
})

export default Field
