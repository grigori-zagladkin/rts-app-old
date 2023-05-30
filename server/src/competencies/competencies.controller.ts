import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import CompetenceDto from './competencies.dto'
import CompetenceResponse from './competencies.response'
import { CompetenciesService } from './competencies.service'

@ApiTags('competencies')
@Controller('competencies')
export class CompetenciesController {
	constructor(private readonly competenciesService: CompetenciesService) {}

	@HttpCode(200)
	@ApiOperation({ summary: 'get Competence by slug' })
	@ApiResponse({ status: 200, type: CompetenceResponse })
	@Get('by-slug/:slug')
	async getCompetenceBySlug(@Param('slug') slug: string) {
		return await this.competenciesService.getCompetenceBySlug(slug)
	}

	@HttpCode(200)
	@ApiOperation({ summary: 'get all Competences' })
	@ApiResponse({ status: 200, type: [CompetenceResponse] })
	@Get()
	async getAllCompetences(@Query('searchTerm') searchTerm: string) {
		return await this.competenciesService.getAllCompetencies(searchTerm)
	}

	@ApiBearerAuth()
	@HttpCode(200)
	@Auth('ADMIN')
	@ApiOperation({ summary: 'create competence' })
	@ApiResponse({ status: 200 })
	@Post()
	async createCompetence() {
		return await this.competenciesService.createCompetence()
	}

	@ApiBearerAuth()
	@HttpCode(200)
	@Auth('ADMIN')
	@ApiOperation({ summary: 'get competence by id' })
	@ApiResponse({ status: 200, type: CompetenceResponse })
	@Get(':id')
	async getCompetenceById(@Param('id') id: string) {
		return await this.competenciesService.getCompetenceById(+id)
	}

	@ApiBearerAuth()
	@HttpCode(200)
	@Auth('ADMIN')
	@ApiOperation({ summary: 'Upd competence' })
	@ApiResponse({ status: 200, type: CompetenceResponse })
	@UsePipes(new ValidationPipe())
	@Patch(':id')
	async updateCompetence(@Param('id') id: string, @Body() dto: CompetenceDto) {
		return await this.competenciesService.updateCompetence(+id, dto)
	}

	@ApiBearerAuth()
	@HttpCode(200)
	@Auth('ADMIN')
	@ApiOperation({ summary: 'Delete course' })
	@ApiResponse({ status: 200, type: CompetenceResponse })
	@Delete(':id')
	async deleteCompetence(@Param('id') id: string) {
		return await this.competenciesService.deleteCompetence(+id)
	}
}
