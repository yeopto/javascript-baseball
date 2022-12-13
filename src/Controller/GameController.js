const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const CarGarage = require('../Model/CarGarage');
const TryCount = require('../Model/TryCount');

class GameController {
  #carGarage;
  #tryCount;
  
  start() {
    this.getCarName();
  }

  getCarName() {
    InputView.readCarName((input) => {
      this.#carGarage = new CarGarage(input);
      this.getTryCount();
    });
  }

  getTryCount() {
    InputView.readTryCount((input) => {
      this.#tryCount = new TryCount(input);
      OutputView.printResultString();
      this.showRace();
    });
  }

  showRace() {
    const cars = this.#carGarage.getCars();
    const count = this.#tryCount.getTryCount();
    for (let i = 0; i < count; i++) {
      cars.forEach((car) => car.race());
      OutputView.printRaceResult(cars);
    }
    OutputView.printFinalWinner(cars);
  }
}

module.exports = GameController;
