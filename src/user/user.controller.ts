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

  // Return Numpers
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    // return this.userService.getUser();
    console.log(id);
  }

  // // Checking for the valid ID
  // @Get(':id')
  // getOne(@Param('id', ParseUUIDPipe) id: number) {
  //   // return this.userService.getUser();
  //   console.log(id);
  // }

  // // Create Custom pipes
  // @Get(':id')
  // getOne(@Param('id', ValidationLogPipe) id: number) {
  //   // return this.userService.getUser();
  //   console.log(id);
  // }
}
@Controller('admin')
export class AdminController {
  @Get()
  getHello() {
    return 'admin';
  }
}
