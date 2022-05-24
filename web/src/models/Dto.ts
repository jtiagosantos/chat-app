export class Dto<T> {
  constructor(
    public data?: T | null,
    public error?: string,
  ) {}
}