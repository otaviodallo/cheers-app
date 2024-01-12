import { Controller, Get } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventService: EventosService){}

    @Get()
    getSomeEvents(){
       return this.eventService.getSomeEvents(1, 10, "Encontro de verão")
    }

    @Get('/eventos')
    getAllEvents(){
        return this.eventService.getAllEvents()
    }

}
