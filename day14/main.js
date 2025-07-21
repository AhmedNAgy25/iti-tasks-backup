import * as Shapes from "./shape.js";

const c1 = new Shapes.Circle(5);
console.log(c1.clacArea());
console.log(c1.clacPrimeter());
console.log(c1.toString());

const r1 = new Shapes.Rectangle(5, 10);
console.log(r1.clacArea());
console.log(r1.clacPrimeter());
console.log(r1.toString());

const s1 = new Shapes.Square(5);
console.log(s1.clacArea());
console.log(s1.clacPrimeter());
console.log(s1.toString());

const Shape = new Shapes.Shape(10, 5);
