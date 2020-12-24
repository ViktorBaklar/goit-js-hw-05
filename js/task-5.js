class Car {

  static getSpecs(car) {
    return console.log (`maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`)
  }
  
  constructor({maxSpeed, price}) {
    this.maxSpeed = maxSpeed;
    this.price = price;
  }

  get price() {
    return this.price;
  }

  set price(value) {
    this.price = value;
  }

  turnOn() {
    return this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return;
  }

  accelerate(value) {
    if ((this.maxSpeed - value)> this.speed) {
      this.speed = this.speed + value;
    }
  }

  decelerate(value) {
    (this.speed - value) > 0 ? (this.speed - value) : false;
  }

  drive(hours) {
    this.distane = hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000