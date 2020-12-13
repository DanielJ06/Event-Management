import { EntityRepository, Repository } from "typeorm";
import { Event } from "../event/event.entity";
import { User } from "../user/user.entity";
import { Subscription } from './subscription.entity';

@EntityRepository(Subscription)
export class SubscriptionRepository extends Repository<Subscription> {
  async createOne(
    event: Event,
    user: User
  ): Promise<any> {
    const subscription = new Subscription();
    subscription.event = event;
    subscription.user = user;
    return this.save(subscription);
  }

}