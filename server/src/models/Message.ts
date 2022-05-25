export class MessageDto {
  constructor(
    public id: number,
    public text: string,
    public author: string,
    public profilePhotoUrl: string,
    public roomCode: string,
  ) {}
}