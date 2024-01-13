import { Evento } from './entities/evento.entity';

export default class EventosDb{
    public eventos: Evento[] = [
        new Evento(1, 'Encontro de verão', new Date(2024, 0, 15), true, true, true),
        new Evento(2, 'BETWEEN FRIENDS', new Date(2024, 1, 20), true, false, true),
        new Evento(3, 'AFTER DE FORMATURA', new Date(2024, 2, 10), true, false, true),
        new Evento(4, 'PUC IN RIO', new Date(2024, 2, 10), false, false, false),
        new Evento(5, 'MC PH NA SHED', new Date(2024, 2, 10), true, true, true),
        new Evento(6, 'FESTA 32', new Date(2024, 2, 10), false, true, false),
        new Evento(7, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(8, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(9, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(10, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(11, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(12, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(13, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(14, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(15, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(16, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(17, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(18, '+55 BAR', new Date(2024, 2, 10), true, false, true),
        new Evento(19, 'DRAKE +55', new Date(2024, 2, 10), false, true, true),
    ];
}