import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationLogPipe } from './validations/validationLog.pipe';
import { CreateUser } from './dto/create-user.dto';
import { log } from 'console';
import { RolesGuard } from './guards/roles.guard';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}
  // @Get()
  // getAll() {
  //   return this.userService.getUsers();
  // }

  // Useing DTO
  @Get()
  getAll(@Body(ValidationPipe) createUser: CreateUser) {
    console.log(createUser);
  }

  // Return Numpers ........<<
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
