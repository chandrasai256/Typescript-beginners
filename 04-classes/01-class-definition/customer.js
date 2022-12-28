var Customer = /** @class */ (function () {
    //lets create a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer("Martin", "King");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "King";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
