import { IUser } from 'types/user.types'

export enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export interface IUserState {
	email: string
	role: UserRole
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
