import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventoDto } from './dto/evento.dto';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventService: EventosService){}

    @Post()
    async createEvento(@Body() payload: EventoDto) {
        return await this.eventService.create(payload)
    }

    @Put()
    async updateEvento(@Body() payload: EventoDto) {
        return await this.eventService.update(payload)
    }
    
    @Get()
async getAllEvents(@Query() params: any){
    if(params.data) {
        const data: Date = new Date(params.data);
        return await this.eventService.findAllByData(data);
    }
    if(params.ativo !== undefined) {
        const ativo: boolean = params.ativo === "true";
        return await this.eventService.findAllAtivos(ativo);
    }
    if(params.excluido !== undefined) {
        const excluido: boolean = params.excluido === "true";
        return await this.eventService.findAllExcluidos(excluido);
    }
    if(params.publico !== undefined) {
        const publico: boolean = params.publico === "true";
        return await this.eventService.findAllPublicos(publico);
    }
    return await this.eventService.findAll();
}
}
