export class Shape {
  constructor(d1, d2) {
    if (this.constructor == Shape) {
      throw new Error(`it's abstract class go away or i will use TS (-_-)`);
    }
    this.d1 = d1;
    this.d2 = d2;
  }
  clacArea() {
    return this.d1 * this.d2;
  }
  clacPrimeter() {
    return (this.d1 + this.d2) * 2;
  }
  toString() {
    return `area = ${this.clacArea().toFixed(
      2
    )} and primeter = ${this.clacPrimeter().toFixed(2)}`;
  }
}

export class Rectangle extends Shape {
  constructor(d1, d2) {
    super(d1, d2);
  }
}
export class Square extends Shape {
  constructor(d1) {
    super(d1, d1);
  }
}
export class Circle extends Shape {
  constructor(d1) {
    super(d1, d1);
  }
  clacArea() {
    return this.d1 * this.d1 * Math.PI;
  }
  clacPrimeter() {
    return 2 * Math.PI * this.d1;
  }
}
