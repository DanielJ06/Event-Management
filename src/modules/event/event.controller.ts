import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return await this.eventService.getAll();
  }
}
