import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get()
  getHello() {}
}
@Controller()
export class AdminController {
  @Get()
  getHello() {}
}
