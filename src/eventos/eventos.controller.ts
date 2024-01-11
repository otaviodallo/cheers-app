import { Controller, Get } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventService: EventosService){}

    @Get()
    getAll(){
        return this.eventService.getEventos()
    }

}
