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
        const eventos = this.eventosDb.eventos
        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;
    
        const eventosPaginados = eventos.slice(startIndex, endIndex);
    
        const eventosFiltrados = filter
          ? eventosPaginados.filter(evento => (
              !evento.excluido &&
              evento.ativo &&
              evento.publico &&
              evento.titulo.toLowerCase().includes(filter.toLowerCase())
            ))
          : eventosPaginados;
    
        return eventosFiltrados;
      }
    
      private dateToString(data: Date): string {
        const year = data.getFullYear();
        const month = (data.getMonth() + 1).toString().padStart(2, '0');
        const day = data.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    }
