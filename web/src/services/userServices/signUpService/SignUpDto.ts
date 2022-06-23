export class SignUpDto {
  constructor(
    public username: string,
    public profileImage: string,
    public email: string,
    public password: string,
  ) {}
}
