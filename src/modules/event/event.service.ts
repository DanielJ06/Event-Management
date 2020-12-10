import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EventRepository } from './event.repository';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { User } from '../user/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository
  ) {}

  async getAll(
    user: User
  ): Promise<Event[]> {
    return await this.eventRepository.getEvents(user);
  }

  async getById(id: number): Promise<Event> {
    const event = await this.eventRepository.getEventById(id);

    if (!event) {
      throw new NotFoundException(`Event not found! Try another id`)
    }

    return event;
  }

  async create(
    createEventDto: CreateEventDto,
    user: User
  ): Promise<Event> {
    const exists = await this.eventRepository.getEventsDate(createEventDto.date);

    if (exists) {
      throw new NotFoundException(`Unavailable date! Try another date`)
    }

    return await this.eventRepository.createEvent(createEventDto, user);
  }
}
