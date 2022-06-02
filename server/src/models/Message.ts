export class MessageDto {
  constructor(
    public id: number,
    public text: string,
    public userId: number,
    public roomCode: string,
    public createdAt: Date,
  ) {}
}