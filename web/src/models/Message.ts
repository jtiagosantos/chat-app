export class MessageDto {
  constructor(
    public text: string,
    public author: string,
    public profilePhotoUrl: string,
    public roomCode: string,
  ) {}
}