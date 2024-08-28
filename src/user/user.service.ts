import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return 'Ma7moud';
  }
}
