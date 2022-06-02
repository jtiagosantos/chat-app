export class UserDto {
  constructor(
    public username: string,
    public email: string,
    public profileImage: string,
    public password: string,
  ) {}
}