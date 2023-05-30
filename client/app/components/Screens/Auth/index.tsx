import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Field from '@/components/UI/Field'
import Heading from '@/components/UI/Heading'
import SkeletonLoader from '@/components/UI/SkeletonLoader'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/Meta'

import { IEmailPassword } from '@/store/user/user.interface'

import styles from './Auth.module.scss'
import { validEmail } from './validEmail'

const Auth: FC = () => {
	// useAuthRedirect()
	const { isLoading } = useAuth()
	const { login } = useActions()
	const type = 'login'
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IEmailPassword>({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
		login(data)
		reset()
	}
	return (
		<Meta title='Авторизация'>
			<section className='flex h-screen'>
				<form onSubmit={handleSubmit(onSubmit)} className='rounded-lg bg-white shadow-sm p-8 m-auto'>
					<Heading className='text-black text-xl font-bold'>Авторизация</Heading>
					{isLoading ? (
						<SkeletonLoader count={2} />
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'email is required',
									pattern: {
										value: validEmail,
										message: 'please enter a valid email',
									},
								})}
								placeholder='email'
								error={errors.email}
							/>
							<Field
								{...formRegister('password', {
									required: 'password is required',
									minLength: {
										value: 6,
										message: 'min password 6 symbols',
									},
								})}
								placeholder='password'
								error={errors.password}
							/>
							<div className={styles.button}>
								<Button type='submit'>Войти</Button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
