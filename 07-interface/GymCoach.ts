import { Coach } from "./Coach";

export class GymCoach implements Coach {
  getDailyWorkout(): string {
    return "Do 20 pushups";
  }
}
