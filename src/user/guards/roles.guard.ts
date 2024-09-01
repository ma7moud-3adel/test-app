import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log(`Roles : => ${roles}`);
    if (!roles) {
      console.log('There are No Roles');
      return true;
    }
    if (roles.includes('admin') || roles.includes('manager')) {
      return true;
    } else {
      return false;
    }
  }
}
