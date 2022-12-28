import { CricketCoach } from "./CricketCoach";
import { GymCoach } from "./GymCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGymCoach = new GymCoach();

// console.log(myCricketCoach.getDailyWorkout());
// console.log(myGymCoach.getDailyWorkout());

let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGymCoach);

for (let tempCoach of theCoaches) {
  console.log(tempCoach.getDailyWorkout());
}
