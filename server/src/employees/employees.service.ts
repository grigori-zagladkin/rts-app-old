import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'
import EmployeesDto from './employees.dto'

@Injectable()
export class EmployeesService {
	constructor(private readonly prismaService: PrismaService) {}

	async getEmployeeBySlug(slug: string) {
		return await this.prismaService.employee.findUniqueOrThrow({
			where: { slug },
			include: {
				competencies: true,
				developments: true,
			},
		})
	}

	async getAllEmployees(searchTerm?: string) {
		const filter: Prisma.EmployeeWhereInput = searchTerm
			? {
					OR: [
						{
							firstName: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							secondName: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
					],
			  }
			: {}
		return await this.prismaService.employee.findMany({
			where: filter,
			orderBy: { createdAt: 'desc' },
			include: {
				competencies: true,
				developments: true,
			},
		})
	}

	async createEmployees() {
		return await this.prismaService.employee
			.create({
				data: {
					firstName: '',
					secondName: '',
					information: '',
					photoPath: '',
					slug: ' ',
				},
			})
			.then((data) => data.id)
	}

	async getEmployeeById(id: number) {
		return await this.prismaService.employee.findUniqueOrThrow({
			where: { id },
			include: {
				competencies: true,
				developments: true,
			},
		})
	}

	async updateEmployee(id: number, dto: EmployeesDto) {
		const employee = await this.getEmployeeById(id)
		return await this.prismaService.employee.update({
			where: { id },
			data: { ...dto, slug: generateSlug(dto.firstName + dto.secondName + id) },
			include: {
				competencies: true,
				developments: true,
			},
		})
	}

	async deleteEmployee(id: number) {
		const employee = await this.getEmployeeById(id)
		return await this.prismaService.employee.delete({ where: { id } })
	}
}
