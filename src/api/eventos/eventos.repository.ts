import { Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";
import { EventoDto } from "./dto/evento.dto";

@Injectable()
export class EventosRepository {
    constructor(private prisma: PrismaService) {}

    async create(payload: EventoDto) {
        const dataEvento = new Date(payload.data)
        return await this.prisma.eventos.create({
            data: {
                titulo: payload.titulo,
                ativo: payload.ativo,
                data: dataEvento,
                excluido: payload.excluido,
                publico: payload.publico
            }
        })
    }

    async update(payload: EventoDto) {
        return await this.prisma.eventos.update({
            data: {
                titulo: payload.titulo,
                ativo: payload.ativo,
                data: payload.data,
                excluido: payload.excluido,
                publico: payload.publico
            },
            where: {
                id: payload.id
            }
        })
    }

    async findAll() {
        return await this.prisma.eventos.findMany()
    }

    async findAllByDate(data: Date) {
        return await this.prisma.eventos.findMany({
            where: {
                data: data
            }
        })
    }

    async findAllEventosAtivos(ativo: boolean) {
        return await this.prisma.eventos.findMany({
            where: {
                ativo: ativo
            }
        })
    }

    async findAllEventosExcluidos(excluido: boolean) {
        return await this.prisma.eventos.findMany({
            where: {
                excluido: excluido
            }
        })
    }

    async findAllEventosPublicos(publico: boolean) {
        return await this.prisma.eventos.findMany({
            where: {
                publico: publico
            }
        })
    }
}