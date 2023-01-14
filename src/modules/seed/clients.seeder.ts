import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { SeederInterface } from './seeder.interface';
import { Client } from '../clients/entities/client.entity';

@Injectable()
export class ClientsSeeder implements SeederInterface {
  constructor(
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
  ) {}

  async seed() {
    const clients = Array.from({ length: 20 }, () => {
      const client = new Client();
      client.name = faker.name.fullName();
      return client;
    });

    await this.clientsRepository.save(clients);
  }
}
