import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getHello() {
    return 'user';
  }
}
@Controller('admin')
export class AdminController {
  @Get()
  getHello() {
    return 'admin';
  }
}
