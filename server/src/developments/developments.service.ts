import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'
import DevelopmentDto from './development.dto'

@Injectable()
export class DevelopmentsService {
	constructor(private readonly prismaService: PrismaService) {}

	async getDevelopmentBySlug(slug: string) {
		return await this.prismaService.development.findUniqueOrThrow({
			where: { slug },
			include: {
				competencies: true,
				employees: true,
			},
		})
	}

	async getAllDevelopments(searchTerm?: string) {
		const filter: Prisma.DevelopmentWhereInput = searchTerm
			? {
					OR: [
						{
							title: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							description: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
					],
			  }
			: {}
		return await this.prismaService.development.findMany({
			where: filter,
			include: {
				competencies: true,
				employees: true,
			},
		})
	}

	async createDevelopment() {
		return await this.prismaService.development
			.create({
				data: {
					title: '',
					slug: '',
					description: '',
					productionDate: '',
					status: false,
				},
			})
			.then((data) => data.id)
	}

	async getDevelopmentById(id: number) {
		return await this.prismaService.development.findUniqueOrThrow({
			where: { id },
			include: {
				competencies: true,
				employees: true,
			},
		})
	}

	async updateDevelopment(id: number, dto: DevelopmentDto) {
		await this.getDevelopmentById(id)
		dto.employeesId && (await this.prismaService.employeesOnDevelopment.deleteMany({ where: { developmentId: id } }))
		dto.competenciesId &&
			(await this.prismaService.competenciesOnDevelopment.deleteMany({ where: { developmentId: id } }))
		dto.employeesId &&
			(await Promise.all(
				dto.employeesId.map(
					async (cid) =>
						await this.prismaService.employeesOnDevelopment.create({ data: { developmentId: id, employeeId: cid } }),
				),
			))
		dto.competenciesId &&
			(await Promise.all(
				dto.competenciesId.map(
					async (cid) =>
						await this.prismaService.competenciesOnDevelopment.create({
							data: { developmentId: id, competenceId: cid },
						}),
				),
			))
		return await this.prismaService.development.update({
			where: { id },
			data: {
				slug: generateSlug(dto.title),
				description: dto.description,
				title: dto.title,
				imagesPath: dto.imagesPath,
				productionDate: dto.productionDate,
				status: dto.status,
			},
			include: {
				competencies: true,
				employees: true,
			},
		})
	}

	async deleteDevelopment(id: number) {
		await this.getDevelopmentById(id)
		await this.prismaService.employeesOnDevelopment.deleteMany({ where: { developmentId: id } })
		await this.prismaService.competenciesOnDevelopment.deleteMany({ where: { developmentId: id } })
		return await this.prismaService.development.delete({ where: { id } })
	}
}
