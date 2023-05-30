import { ApiProperty } from '@nestjs/swagger'

export default class EmployeesResponse {
	@ApiProperty({ example: 1, description: 'id работника' })
	id: number

	@ApiProperty({ example: 'ivan', description: 'Имя работника' })
	firstName: string

	@ApiProperty({ example: 'ivanov', description: 'Фамилия работника' })
	secondName: string

	@ApiProperty({ example: 'wefegrege.jpg', description: 'Путь к картинке аватара' })
	photoPath: string

	@ApiProperty({
		example: 'Обеспечение',
		description: 'Информация о сотруднике',
	})
	information: string

	@ApiProperty({ example: 'ivanov-ivan', description: 'слаг работника' })
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
