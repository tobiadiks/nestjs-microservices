import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('USER_CREATED')
  handleUserCreated(data: any) {
    console.log('handleUserCreated - COMMUINICATION', data);
  }
}
