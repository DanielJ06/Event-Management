import { EntityRepository, Repository } from "typeorm";
import { Event } from "./event.entity";
import { CreateEventDto } from './dto/create-event.dto';
import { User } from "../user/user.entity";

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async getEvents(
    user: User
  ): Promise<Event[]> {
    return await this.find({ where: { userId: user.id } })
  }

  async createEvent(
    createEventDto: CreateEventDto,
    user: User
  ): Promise<Event> {
    const { title, description, canceled, date, location } = createEventDto;
    const event = {
      title,
      description,
      canceled,
      date,
      location,
      user: user
    }
    return await this.save(event);
  }

  async getEventById(id: number): Promise<Event> {
    return await this.findOne(id);
  }

  async getEventsDate(date: Date, user: User): Promise<Event> {
    return await this.findOne({ 
      where: { 
        date: date,
        userId: user.id
      } 
    });
  }
}