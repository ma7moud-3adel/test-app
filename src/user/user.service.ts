import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'Ma7moud';
  }

  getUser() {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return 'Ma7moud in DB';
  }
}
