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
    
    const eventosFiltradosComFiltro = eventos.filter(evento =>
      !evento.excluido && evento.ativo && evento.publico &&
      (filter ? this.matchFilter(evento, filter) : true)
    );

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const eventosPaginados = eventosFiltradosComFiltro.slice(startIndex, endIndex);

    return eventosPaginados;
  }

  matchDate(eventDate: Date, filter: string): boolean {
    const formattedEventDate = eventDate.toISOString().split('T')[0];
    return formattedEventDate === filter;
  }

  matchFilter(evento: Evento, filter: string): boolean {
    const filterLowerCase = filter.toLowerCase();

    return (
      evento.titulo.toLowerCase().includes(filterLowerCase) ||
      this.matchDate(evento.data, filterLowerCase)
    );
  }
}
