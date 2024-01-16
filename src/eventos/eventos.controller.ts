import { BadRequestException, Controller, Get } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventService: EventosService){}

    @Get()
    getSomeEvents(){
       /* EXEMPLOS: getSomeEvents(1,5 "+55 BAR") - getSomeEvents(2, 5, "2024-02-20"). 
       Aconselho dar get no localhost:3000/eventos/all e pegar os titulos e data de lá. Data funciona apenas igual no exemplo acima.
       */
       const eventos = this.eventService.getSomeEvents(1, 5, "2024-03-10")
       return eventos
    }


    @Get('/all')
    getAllEvents(){
        return this.eventService.getAllEvents()
    }

}
