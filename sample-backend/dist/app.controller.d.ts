import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(createUserDto: CreateUserDto): void;
}
