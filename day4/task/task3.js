let rectangle = {
  width: 50,
  heigh: 20,
  calcArea: function () {
    return (this.width + this.heigh) * 2;
  },
  calcPreimetive: function () {
    return this.width * this.heigh;
  },
  displayInfo: function () {
    console.log(
      `rec width = ${this.width} and height = ${this.heigh} 
      , it's area = ${this.calcArea()} 
      ,it's Preimetive = ${this.calcPreimetive()} `
    );
  },
};
rectangle.displayInfo();
console.log(rectangle.calcPreimetive());
console.log(rectangle.calcArea());
