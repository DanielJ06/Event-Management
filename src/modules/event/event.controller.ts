import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/decorators/get-user.decorator';
import { User } from '../user/user.entity';

@Controller('event')
@UseGuards(AuthGuard('jwt'))
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getAllEvents(
    @GetUser() user: User
  ): Promise<Event[]> {
    return await this.eventService.getAll(user);
  }

  @Get('/:id')
  async getEventById(@Param('id') id: number): Promise<Event>{
    return await this.eventService.getById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEvent(
    @Body() createEventDto: CreateEventDto,
    @GetUser() user: User
  ): Promise<Event> {
    return await this.eventService.create(createEventDto, user);
  }
}
