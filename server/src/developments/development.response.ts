import { ApiProperty } from '@nestjs/swagger'

export default class DevelopmentResponse {
	imagesPath: string[]
	id: number

	@ApiProperty({ example: 'Радар мт-190', description: 'Название разработки' })
	title: string

	@ApiProperty({
		example: 'Эта разработка ....',
		description: 'описание разработки',
	})
	description: string

	@ApiProperty({
		example: ['скорость обнаружения-120нс', 'дальность обнаружения-400км'],
		description: 'Характеристики разработки',
	})
	technicalStats: string[]

	@ApiProperty({ example: 'радар-мт-190', description: 'Slug разработки' })
	slug: string

	@ApiProperty({
		example: 'Sun Dec 17 1995 03:24:00 GMT...',
		description: 'created time',
	})
	createdAt: Date

	@ApiProperty({
		example: 'Sun Dec 17 1996 03:24:00 GMT...',
		description: 'updated time',
	})
	updatedAt: Date
}
