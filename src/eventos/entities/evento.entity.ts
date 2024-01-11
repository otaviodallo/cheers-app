export class Evento {
  constructor(
    public id: number,
    public titulo: string,
    public data: Date,
    public ativo: boolean,
    public excluido: boolean,
    public publico: boolean,
  ) {}
}