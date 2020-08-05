import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return await this.eventService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventService.create(createEventDto);
  }
}
