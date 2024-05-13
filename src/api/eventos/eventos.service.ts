
import { Injectable } from '@nestjs/common';
import { EventosRepository } from './eventos.repository';
import { EventoDto } from './dto/evento.dto';


@Injectable()
export class EventosService {
  constructor(private eventosRepository: EventosRepository) {}

  async create(payload: EventoDto) {
    return await this.eventosRepository.create(payload)
  }

  async update(payload: EventoDto) {
    return await this.eventosRepository.update(payload)
  }

  async findAll() {
    return await this.eventosRepository.findAll()
  }

  async findAllByData(data: Date) {
    return await this.eventosRepository.findAllByDate(data)
  }

  async findAllAtivos(ativo: boolean) {
    return await this.eventosRepository.findAllEventosAtivos(ativo)
  }

  async findAllExcluidos(excluido: boolean) {
    return await this.eventosRepository.findAllEventosExcluidos(excluido)
  }

  async findAllPublicos(publico: boolean) {
    return await this.eventosRepository.findAllEventosPublicos(publico)
  }
}
