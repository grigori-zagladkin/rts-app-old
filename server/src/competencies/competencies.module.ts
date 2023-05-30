import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CompetenciesController } from './competencies.controller'
import { CompetenciesService } from './competencies.service'

@Module({
	controllers: [CompetenciesController],
	providers: [CompetenciesService, PrismaService],
})
export class CompetenciesModule {}
