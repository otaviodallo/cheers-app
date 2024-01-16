import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import EventosDb from './eventos.db';

@Module({
  providers: [EventosService, EventosDb],
  controllers: [EventosController]
})
export class EventosModule {}
