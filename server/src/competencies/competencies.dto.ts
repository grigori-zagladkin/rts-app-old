import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsOptional, IsString } from 'class-validator'

export default class CompetenceDto {
	@ApiProperty({ example: 'Владениее с++', description: 'Компетенция' })
	@IsString({ message: 'title should be a string' })
	title: string

	@ApiProperty({
		example: 'Обладание данной компетенцией позволит вам...',
		description: 'Описание компетенции',
	})
	@IsString({ message: 'description should be a string' })
	description: string

	@ApiProperty({
		example: ['wefegrege.jpg', 'wefewff.jpg'],
		description: 'Массив путей к картинкам',
	})
	@IsArray({ message: 'imagesPath should be an array' })
	imagesPath: string[]

	@IsArray({ message: 'developmentsId should be an array' })
	@ApiProperty({ example: [1, 2, 3], description: 'Массив id разработок' })
	@IsOptional()
	developmentsId?: number[]

	@IsArray({ message: 'employeesId should be an array' })
	@ApiProperty({ example: [1, 2, 3], description: 'Массив id работников' })
	@IsOptional()
	employeesId?: number[]

	// @IsArray({ message: 'employeesId should be an array' })
	// @ApiProperty({ example: [1, 2, 3], description: 'Массив id курсов' })
	// @IsOptional()
	// coursesId?: number[]
}
