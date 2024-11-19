import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: '1',
      name: 'John Doe',
      email: '',
      password: '',
    },
    {
      id: '2',
      name: 'Alice',
      email: '',
      password: '',
    },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
