import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EventRepository } from './event.repository';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository
  ) {}

  async getAll(): Promise<Event[]> {
    return await this.eventRepository.getEvents();
  }

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventRepository.createEvent(createEventDto);
  }
}
