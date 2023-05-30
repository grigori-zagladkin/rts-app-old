import { ApiProperty } from '@nestjs/swagger'
import { Competence } from '@prisma/client'

export default class CompetenceResponse implements Competence {
	@ApiProperty({ example: 1, description: 'id компетенции' })
	id: number

	@ApiProperty({ example: 'Владениее с++', description: 'Компетенция' })
	title: string

	@ApiProperty({
		example: 'Обладание данной компетенцией позволит вам...',
		description: 'Описание компетенции',
	})
	description: string

	@ApiProperty({
		example: ['wefegrege.jpg', 'wefewff.jpg'],
		description: 'Массив путей к картинкам',
	})
	imagesPath: string[]

	@ApiProperty({
		example: 'Обеспечение',
		description: 'Обеспечение компетенции',
	})
	production: string

	@ApiProperty({ example: 'владение-с++', description: 'слаг компетенции' })
	slug: string

	@ApiProperty({
		example: 'Sun Dec 17 1995 03:24:00 GMT...',
		description: 'created time',
	})
	createdAt: Date

	@ApiProperty({
		example: 'Sun Dec 18 1995 03:24:00 GMT...',
		description: 'updated time',
	})
	updatedAt: Date
}
