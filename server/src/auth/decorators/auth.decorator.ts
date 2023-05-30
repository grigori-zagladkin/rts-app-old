import { UseGuards, applyDecorators } from '@nestjs/common'
import { TypeRole } from '../auth.interface'
import { OnlyAdminGuard } from '../guards/admin.guard'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'

export const Auth = (role: TypeRole) =>
	applyDecorators(role === 'ADMIN' ? UseGuards(JwtAuthGuard, OnlyAdminGuard) : UseGuards(JwtAuthGuard))
