import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService extends TypeOrmCrudService<Client> {
  constructor(@InjectRepository(Client) repo) {
    super(repo);
  }
}
