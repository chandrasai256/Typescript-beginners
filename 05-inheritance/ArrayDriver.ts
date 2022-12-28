import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(10, 10, 0, 36);

//declare an array of shapes  ..initially empty

let theShapes: Shape[] = [];

//add the shapes to the array

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
}
