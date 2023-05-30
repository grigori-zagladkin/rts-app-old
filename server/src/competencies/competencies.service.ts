import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { generateSlug } from 'src/utils/generate-slug'
import CompetenceDto from './competencies.dto'

@Injectable()
export class CompetenciesService {
	constructor(private readonly prismaService: PrismaService) {}

	async getCompetenceBySlug(slug: string) {
		return await this.prismaService.competence.findUniqueOrThrow({
			where: { slug },
			include: {
				developments: true,
				employees: true,
			},
		})
	}

	async getAllCompetencies(searchTerm?: string) {
		const filter: Prisma.CompetenceWhereInput = searchTerm
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
		return await this.prismaService.competence.findMany({
			where: filter,
			include: {
				developments: true,
				employees: true,
			},
		})
	}

	async createCompetence() {
		return await this.prismaService.competence
			.create({
				data: {
					title: '',
					slug: '',
					description: '',
				},
			})
			.then((data) => data.id)
	}

	async getCompetenceById(id: number) {
		return await this.prismaService.competence.findUniqueOrThrow({
			where: { id },
			include: {
				developments: true,
				employees: true,
			},
		})
	}

	async updateCompetence(id: number, dto: CompetenceDto) {
		await this.getCompetenceById(id)
		dto.developmentsId &&
			(await this.prismaService.competenciesOnDevelopment.deleteMany({ where: { competenceId: id } }))
		dto.employeesId && (await this.prismaService.employeesOnCompetencies.deleteMany({ where: { competenceId: id } }))
		dto.developmentsId &&
			dto.employeesId &&
			(await Promise.all([
				dto.employeesId.map(
					async (cid) =>
						await this.prismaService.employeesOnCompetencies.create({ data: { employeeId: cid, competenceId: cid } }),
				),
				dto.developmentsId.map(
					async (cid) =>
						await this.prismaService.competenciesOnDevelopment.create({
							data: { developmentId: cid, competenceId: cid },
						}),
				),
			]))
		return await this.prismaService.competence.update({
			where: { id },
			data: {
				slug: generateSlug(dto.title),
				description: dto.title,
				title: dto.title,
				imagesPath: dto.imagesPath,
			},
			include: {
				developments: true,
				employees: true,
			},
		})
	}

	async deleteCompetence(id: number) {
		await this.getCompetenceById(id)
		await this.prismaService.employeesOnCompetencies.deleteMany({ where: { competenceId: id } })
		await this.prismaService.competenciesOnDevelopment.deleteMany({ where: { competenceId: id } })
		return await this.prismaService.competence.delete({ where: { id } })
	}
}
