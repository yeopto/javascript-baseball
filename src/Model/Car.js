const { Random } = require('@woowacourse/mission-utils');

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  race() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Car;
