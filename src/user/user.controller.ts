import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Get()
  // getAll() {
  //   return this.userService.getUsers();
  // }

  @Get()
  getOne() {
    return this.userService.getUser();
  }
}
@Controller('admin')
export class AdminController {
  @Get()
  getHello() {
    return 'admin';
  }
}
