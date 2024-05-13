import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { Module } from '@nestjs/common';
import { EventosRepository } from './eventos.repository';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [EventosService, EventosRepository, PrismaService],
  controllers: [EventosController]
})
export class EventosModule {}
