import { UserRole } from '@/store/user/user.interface'

import { IBase } from './helper.interface'

export interface IUser extends IBase {
	email: string
	id: number
	role: UserRole
}
