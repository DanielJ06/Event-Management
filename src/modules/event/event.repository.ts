import { EntityRepository, Repository } from "typeorm";
import { Event } from "./event.entity";
import { CreateEventDto } from './dto/create-event.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async getEvents(): Promise<Event[]> {
    return await this.find()
  }

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    return await this.save(createEventDto)
  }

  async getEventById(id: number): Promise<Event> {
    return await this.findOne(id);
  }

  async getEventsDate(date: Date): Promise<Event> {
    return await this.findOne({ where: { date } });
  }
}