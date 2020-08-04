import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EventModule
  ],
})
export class AppModule {}
