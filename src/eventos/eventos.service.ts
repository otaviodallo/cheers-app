import { Injectable } from '@nestjs/common';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
    public eventos: Evento[] = [
        new Evento(1, 'Encontro de verão', new Date(2024, 0, 15), true, false, true),
        new Evento(2, 'BETWEEN FRIENDS', new Date(2024, 1, 20), true, false, true),
        new Evento(3, 'AFTER DE FORMATURA', new Date(2024, 2, 10), false, false, true),
    ];

    getEventos(): Evento[] {
        return this.eventos;
    }
}
