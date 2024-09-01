import { CreateUser } from './dto/create-user.dto';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async create(createUser) {
    const user = await this.user.create(createUser);
    return this.user.save(user);
  }

  async findAll() {
    const users = await this.user.find();
    return {
      data: users,
      count: users.length,
    };
  }
  async findOne(id) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async update(id, updateUser) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }
    return this.user.save({ ...user, ...updateUser });
  }
  // getUsers() {
  //   return 'Ma7moud';
  // }

  // getUser() {
  //   throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  //   return 'Ma7moud in DB';
  // }
}
