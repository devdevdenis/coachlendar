import { TypeOrmModule } from '@nestjs/typeorm';
import { seedOrmConfig } from '../../ormConfig';
import { SeedService } from './seed.service';
import { Module } from '@nestjs/common';
import { ClientsSeeder } from './clients.seeder';
import { Client } from '../clients/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(seedOrmConfig),
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [],
  providers: [SeedService, ClientsSeeder],
})
export class SeedModule {}
