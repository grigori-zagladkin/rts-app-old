import clsx from 'clsx'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import { FieldError } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'

import styles from '../Form.module.scss'

import { useUpload } from './useUpload'

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

const Upload: FC<IUploadField> = ({ folder, image, onChange, placeholder, error, style, isNoImage }) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)
	return (
		<div className={clsx(styles.field, styles.uploadField)}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadImage} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<Skeleton count={1} className='w-full h-full' />
						) : (
							image && <Image src={image} alt='' layout='fill' unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Upload
