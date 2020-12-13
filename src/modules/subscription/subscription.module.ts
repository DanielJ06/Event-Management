import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { SubscriptionRepository } from './subscription.repository';
import { UserModule } from '../user/user.module';
import { EventRepository } from '../event/event.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubscriptionRepository, EventRepository]),
    UserModule
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService]
})
export class SubscriptionModule {}
