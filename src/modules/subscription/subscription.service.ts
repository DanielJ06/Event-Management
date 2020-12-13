import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from '../event/event.repository';
import { User } from '../user/user.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './subscription.entity';
import { SubscriptionRepository } from './subscription.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(SubscriptionRepository)
    @InjectRepository(EventRepository)
    private subscriptionRepository: SubscriptionRepository,
    private eventRepository: EventRepository
  ) {}

  async create(
    createSubscriptionDto: CreateSubscriptionDto,
    user: User
  ): Promise<Subscription> {
    const { eventId } = createSubscriptionDto;
    const event = await this.eventRepository.getEventById(eventId);
    return await this.subscriptionRepository.createOne(event, user);
  }
}
