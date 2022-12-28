let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for (let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }

//let use the simplified for loop

console.log("---------------");

for (let tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log(tempSport + " <<My Favourite!");
  } else {
    console.log(tempSport);
  }
}
