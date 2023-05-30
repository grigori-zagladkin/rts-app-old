import { IBase } from './helper.interface'

export interface IEmployee extends IBase {
	firstName: string
	secondName: string
	slug: string
	information: string
	photoPath: string
	competenciesId: number[]
	developmentsId: number[]
}

export interface IUpdateEmployee {
	firstName: string
	secondName: string
	information: string
	photoPath: string
	competenciesId: number[]
	developmentsId: number[]
}
