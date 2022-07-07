/* export class Dto<T> {
  constructor(
    public data?: T,
  ) {}
} */

export type Dto<T> = T | undefined;