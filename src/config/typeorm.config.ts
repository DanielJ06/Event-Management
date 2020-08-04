import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'daniel06',
  database: 'eventmanagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}