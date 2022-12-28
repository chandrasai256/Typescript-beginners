"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GymCoach_1 = require("./GymCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGymCoach = new GymCoach_1.GymCoach();
console.log(myCricketCoach.getDailyWorkout());
console.log(myGymCoach.getDailyWorkout());
// let theCoaches: Coach[] = [];
// theCoaches.push(myCricketCoach);
// theCoaches.push(myGymCoach);
// for (let tempCoach of theCoaches) {
//   console.log(tempCoach.getDailyWorkout());
// }
