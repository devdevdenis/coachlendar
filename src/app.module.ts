import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './ormConfig';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ClientsModule],
})
export class AppModule {}
