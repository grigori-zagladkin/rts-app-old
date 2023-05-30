import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export default class EmployeesDto {
	@ApiProperty({ example: 'Vasya', description: 'first name of employee' })
	@IsString({ message: 'first name should be a string' })
	firstName: string

	@ApiProperty({ example: 'Petrov', description: 'second name of employee' })
	@IsString({ message: 'last name of employees' })
	secondName: string

	@ApiProperty({
		example: 'wefergegfsesdvv.jpg',
		description: 'photo employee',
	})
	@IsString({ message: 'image path should be a string' })
	photoPath: string

	@ApiProperty({
		example: 'вася петров классный специалист и т.д ....',
		description: 'short information about employee',
	})
	@IsString({ message: 'information should be a string' })
	information: string
}
