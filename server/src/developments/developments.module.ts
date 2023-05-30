import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { DevelopmentsController } from './developments.controller'
import { DevelopmentsService } from './developments.service'

@Module({
	controllers: [DevelopmentsController],
	providers: [DevelopmentsService, PrismaService],
})
export class DevelopmentsModule {}
