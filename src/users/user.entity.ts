export class User {
  id: number;
  name: string;
  age: number;
  home: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
