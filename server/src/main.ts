import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { PrismaService } from './prisma/prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const configService = app.get(ConfigService)
	const PORT = configService.get('PORT') || 2000

	const FRONTEND_URL = configService.get('FRONTEND_URL')
	app.enableCors({
		credentials: true,
		origin: FRONTEND_URL,
	})

	app.use(cookieParser())
	app.setGlobalPrefix('api')

	const config = new DocumentBuilder()
		.setTitle('rts-app-api')
		.setDescription('api description')
		.setVersion('1.0')
		.addTag('endpoints')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api/docs', app, document)

	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	await app.listen(PORT, () => console.log(`port ${PORT}`))
}
bootstrap()
