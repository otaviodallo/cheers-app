import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class EventoDto {
  @IsNumber()
  @IsOptional()
  id: number

  @IsString()
  @IsOptional()
  titulo: string

  @IsDate({ message: 'Campo data deve ser do tipo date.' })
  @IsOptional()
  data: Date

  @IsBoolean()
  @IsOptional()
  ativo: boolean

  @IsBoolean()
  @IsOptional()
  excluido: boolean

  @IsBoolean()
  @IsOptional()
  publico: boolean
}