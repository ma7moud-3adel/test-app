import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.user.find();
    return users;
  }
  // getUsers() {
  //   return 'Ma7moud';
  // }

  // getUser() {
  //   throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  //   return 'Ma7moud in DB';
  // }
}
