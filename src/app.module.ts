import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config'
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EventModule,
    UserModule
  ],
})
export class AppModule {}
