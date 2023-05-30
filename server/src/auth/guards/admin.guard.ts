import { CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { User } from '@prisma/client'

export class OnlyAdminGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ user: User }>()
		const user = request.user
		if (user.role !== 'ADMIN') {
			throw new ForbiddenException('You have not enough rights')
		}
		return user.role === 'ADMIN'
	}
}
