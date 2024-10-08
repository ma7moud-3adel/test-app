import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationLogPipe } from './validations/validationLog.pipe';
import { CreateUser } from './dto/create-user.dto';
import { log } from 'console';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './guards/roles.decorator';
import { create } from 'domain';

@Controller('user')
// // UseGuards
// @UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUser: CreateUser) {
    return this.userService.create(createUser);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: CreateUser) {
    return this.userService.update(id, updateUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
  // // @Get()
  // // getAll() {
  // //   return this.userService.getUsers();
  // // }

  // // Useing DTO
  // @Get()
  // getAll(@Body(ValidationPipe) createUser: CreateUser) {
  //   console.log(createUser);
  // }

  // // Return Numpers ........<<
  // @Get(':id')
  // getOne(@Param('id', ParseIntPipe) id: number) {
  //   // return this.userService.getUser();
  //   console.log(id);
  // }

  // // // Checking for the valid ID
  // // @Get(':id')
  // // getOne(@Param('id', ParseUUIDPipe) id: number) {
  // //   // return this.userService.getUser();
  // //   console.log(id);
  // // }

  // // // Create Custom pipes
  // // @Get(':id')
  // // getOne(@Param('id', ValidationLogPipe) id: number) {
  // //   // return this.userService.getUser();
  // //   console.log(id);
  // // }

  // @Delete(':id')
  // @Roles(['admin', 'manager'])
  // // @Roles(['user'])
  // @UseGuards(RolesGuard)
  // deletUser(@Body(ValidationPipe) createUser: CreateUser) {
  //   console.log(createUser);
  // }
}
@Controller('admin')
export class AdminController {
  @Get()
  getHello() {
    return 'admin';
  }
}
