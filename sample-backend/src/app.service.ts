import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users = [];
  constructor(
    @Inject('COMMUINICATION') private readonly communicationClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    this.communicationClient.emit('USER_CREATED', createUserDto);
  }
}
