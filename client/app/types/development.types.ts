import { ICompetence } from './competence.types'
import { IEmployee } from './employee.types'
import { IBase } from './helper.interface'

export interface IDevelopment extends IBase {
	title: string
	slug: string
	description: string
	productionDate: string
	status: boolean
	technicalStats: string[]
	employees: IEmployee[]
	competencies: ICompetence[]
}

export interface IUpdateDevelopment {}
