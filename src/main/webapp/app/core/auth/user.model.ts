export class User {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public login: string,
    public firstName: string | null,
    public lastName: string | null,
    public email: string
  ) {}
}

