export class Customers {
  //lets create a constructor

  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }
}
