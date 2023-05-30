import { ApiProperty } from '@nestjs/swagger'
import { IsJWT, IsString } from 'class-validator'

export default class RefreshTokenDto {
	@ApiProperty({
		example: 'wefregergeg.ergegrgregege.ergergregregregreger',
		description: 'refresh token',
	})
	@IsString({ message: 'token should be a string' })
	@IsJWT({ message: 'refresh token is not a jwt' })
	refreshToken: string
}
