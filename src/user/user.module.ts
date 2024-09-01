import { Module } from '@nestjs/common';
import { AdminController, UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const schema = [User]; // entity module

@Module({
  imports: [TypeOrmModule.forFeature(schema)],
  controllers: [UserController, AdminController],
  providers: [UserService],
})
export class UserModule {}
