import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ValidationLogPipe } from './validations/validationLog.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  // @Get(':id')
  // getOne(@Param('id', ParseIntPipe) id: number) {
  //   // return this.userService.getUser();
  //   console.log(id);
  // }
  // @Get(':id')
  // getOne(@Param('id', ParseUUIDPipe) id: number) {
  //   // return this.userService.getUser();
  //   console.log(id);
  // }
  @Get(':id')
  getOne(@Param('id', ValidationLogPipe) id: number) {
    // return this.userService.getUser();
    console.log(id);
  }
}
@Controller('admin')
export class AdminController {
  @Get()
  getHello() {
    return 'admin';
  }
}
