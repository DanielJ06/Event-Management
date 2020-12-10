import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('event')
@UseGuards(AuthGuard('jwt'))
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return await this.eventService.getAll();
  }

  @Get('/:id')
  async getEventById(@Param('id') id: number): Promise<Event>{
    return await this.eventService.getById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventService.create(createEventDto);
  }
}
