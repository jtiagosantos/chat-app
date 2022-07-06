export class MessageDto {
  constructor(
    public text: string,
    public userId: number,
    public roomCode: string,
  ) {}
}