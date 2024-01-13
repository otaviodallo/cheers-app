import { Injectable } from '@nestjs/common';
import EventosDb from './eventos.db';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {

    constructor(private readonly eventosDb: EventosDb) { }

    getAllEvents() {
        const eventos = this.eventosDb.eventos
        return eventos
    }

    getSomeEvents(page: number, size: number, filter?: string): Evento[] {
      const eventos = this.eventosDb.eventos;

      const eventosFiltrados = eventos.filter(evento =>
        !evento.excluido && evento.ativo && evento.publico
      );
    
      const eventosFiltradosComFiltro = eventosFiltrados.filter(evento => 
        filter ? 
        evento.titulo.toLowerCase().includes(filter.toLowerCase()) : true
      );
    
      const startIndex = (page - 1) * size;
      const endIndex = startIndex + size;
      const eventosPaginados = eventosFiltradosComFiltro.slice(startIndex, endIndex);
    
      return eventosPaginados;
    }
    }
