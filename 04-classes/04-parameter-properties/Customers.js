"use strict";
var Customers = /** @class */ (function () {
    //lets create a constructor
    function Customers(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
//lets create an instance
var myCustomers = new Customers("Chandra", "sai");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "King";
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
