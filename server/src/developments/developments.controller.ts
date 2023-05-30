import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import DevelopmentDto from './development.dto'
import DevelopmentResponse from './development.response'
import { DevelopmentsService } from './developments.service'

@ApiTags('developments')
@Controller('developments')
export class DevelopmentsController {
	constructor(private readonly developmentsService: DevelopmentsService) {}

	@HttpCode(200)
	@ApiOperation({ summary: 'get all developments' })
	@ApiResponse({ status: 200, type: [DevelopmentResponse] })
	@Get()
	async getAllDevelopments() {
		return await this.developmentsService.getAllDevelopments()
	}

	@HttpCode(200)
	@ApiOperation({ summary: 'get development by slug' })
	@ApiResponse({ status: 200, type: DevelopmentResponse })
	@Get('by-slug/:slug')
	async getDevelopmentBySlug(@Param('slug') slug: string) {
		return await this.developmentsService.getDevelopmentBySlug(slug)
	}

	@ApiBearerAuth()
	@Auth('ADMIN')
	@HttpCode(200)
	@ApiOperation({ summary: 'get development by id' })
	@ApiResponse({ status: 200, type: DevelopmentResponse })
	@Get('/:id')
	async getDevelopmentById(@Param('id') id: string) {
		return await this.developmentsService.getDevelopmentById(+id)
	}

	@ApiBearerAuth()
	@Auth('ADMIN')
	@HttpCode(200)
	@ApiOperation({ summary: 'create development' })
	@ApiResponse({ status: 200 })
	@Post()
	async createDevelopments() {
		return await this.developmentsService.createDevelopment()
	}

	@ApiBearerAuth()
	@Auth('ADMIN')
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@ApiOperation({ summary: 'update development' })
	@ApiResponse({ status: 200, type: DevelopmentResponse })
	@Patch('/:id')
	async updateDevelopments(@Param('id') id: string, @Body() dto: DevelopmentDto) {
		return await this.developmentsService.updateDevelopment(+id, dto)
	}

	@ApiBearerAuth()
	@Auth('ADMIN')
	@HttpCode(200)
	@ApiOperation({ summary: 'delete development' })
	@ApiResponse({ status: 200, type: DevelopmentResponse })
	@Delete('/:id')
	async deleteDevelopment(@Param('id') id: string) {
		return await this.developmentsService.deleteDevelopment(+id)
	}
}
