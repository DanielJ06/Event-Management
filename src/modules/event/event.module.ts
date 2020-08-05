import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventRepository])
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
