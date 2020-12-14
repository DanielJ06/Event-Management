import { Body, ClassSerializerInterceptor, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { GetUser } from '../user/decorators/get-user.decorator';
import { User } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('subscription')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Post()
  async create(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
    @GetUser() user: User
  ): Promise<Subscription> {
    return await this.subscriptionService.create(createSubscriptionDto, user);
  }
}
