import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { join } from 'path'
import { AuthModule } from './auth/auth.module'
import { CompetenciesModule } from './competencies/competencies.module'
import { DevelopmentsModule } from './developments/developments.module'
import { EmployeesModule } from './employees/employees.module'
import { FilesModule } from './files/files.module'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(path, 'uploads'),
		}),
		AuthModule,
		FilesModule,
		UsersModule,
		CompetenciesModule,
		DevelopmentsModule,
		EmployeesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
