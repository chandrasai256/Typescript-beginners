"use strict";
//lets create an instance
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var myCustomers = new Customers_1.Customers("Chandra", "sai");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
