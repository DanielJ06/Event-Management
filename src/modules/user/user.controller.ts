import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  async signup(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return await this.userService.signup(authCredentialsDto);
  }
}
