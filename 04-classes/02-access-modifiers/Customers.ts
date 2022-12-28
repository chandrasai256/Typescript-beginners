class Customers {
  private _firstName: string;
  private _lastName: string;

  //lets create a constructor

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

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

let myCustomers = new Customers("Martin", "King");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "King";

console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
