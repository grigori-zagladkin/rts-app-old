import { IDevelopment } from './development.types'
import { IEmployee } from './employee.types'
import { IBase } from './helper.interface'

export interface ICompetence extends IBase {
	title: string
	slug: string
	description: string
	imagesPath: string[]
	employees: IEmployee[]
	developments: IDevelopment[]
}

export interface IUpdateCompetence {
	title: string
	description: string
	imagesPath: string[]
	employeesId: number[]
	developmentsId: number[]
}
