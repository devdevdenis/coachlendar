import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Client } from './entities/client.entity';
import { ClientsService } from './clients.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Client,
  },
  query: {
    alwaysPaginate: true,
  },
})
@ApiTags('clients')
@Controller('clients')
export class ClientsController implements CrudController<Client> {
  constructor(public service: ClientsService) {}
}
