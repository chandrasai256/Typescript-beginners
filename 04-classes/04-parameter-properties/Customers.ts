class Customers {
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

//lets create an instance

let myCustomers = new Customers("Chandra", "sai");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "King";

console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
