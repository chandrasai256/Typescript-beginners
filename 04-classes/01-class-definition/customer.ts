class Customer {
  firstName: string;
  lastName: string;

  //lets create a constructor

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

//lets create an instance

let myCustomer = new Customer("Martin", "King");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "King";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
