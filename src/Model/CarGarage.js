const Car = require('./Car');

class CarGarage {
  #cars = [];

  constructor(carName) {
    const cars = carName.split(',');
    cars.forEach((car) => {
      this.validate(car);
      this.#cars.push(new Car(car));
    });
  }

  validate(car) {
    if (car.length > 5 || car.length === 0) {
      throw new Error('[ERROR] 이름은 다섯자 이하만 가능합니다');
    }
  }

  getCars() {
    return this.#cars;
  }
}

module.exports = CarGarage;
