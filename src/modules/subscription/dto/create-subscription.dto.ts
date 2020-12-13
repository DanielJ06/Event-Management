import { IsNotEmpty } from "class-validator";
import { Event } from "src/modules/event/event.entity";

export class CreateSubscriptionDto {
  @IsNotEmpty()
  eventId: number
}