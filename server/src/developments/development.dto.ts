import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator'

export default class DevelopmentDto {
	@ApiProperty({ example: 'Радар мт-190', description: 'Название разработки' })
	@IsString({ message: 'title should be a string' })
	title: string

	@ApiProperty({
		example: 'Эта разработка ....',
		description: 'описание разработки',
	})
	description: string

	@ApiProperty({
		example: '2012-02-13',
		description: 'Дата выпуска продукта',
	})
	@IsString({ message: 'date should be a string' })
	productionDate: string

	@ApiProperty({
		example: true,
		description: 'Статус разработки',
	})
	@IsBoolean({ message: 'status should be a boolean' })
	status: boolean

	@IsArray()
	@ApiProperty()
	imagesPath: string[]

	@IsArray()
	@ApiProperty()
	technicalStats: string[]

	@IsArray()
	@ApiProperty()
	@IsOptional()
	employeesId?: number[]

	@IsArray()
	@ApiProperty()
	@IsOptional()
	competenciesId?: number[]
}
