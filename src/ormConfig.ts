import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number.parseInt(process.env.DB_PORT) || 5435,
  username: process.env.DB_USER || 'app',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'coachlendar',
  schema: process.env.DB_SCHEMA || 'public',
  synchronize: true,
  logging: 'all',
  entities: [resolve(__dirname, 'modules/**/entities/*.entity.{ts,js}')],
};

export const seedOrmConfig: TypeOrmModuleOptions = {
  ...ormConfig,
  logging: ['error', 'warn'],
};
