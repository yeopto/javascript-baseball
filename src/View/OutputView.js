const { Console } = require('@woowacourse/mission-utils');
const ParseResult = require('../utils/ParseResult');

const OutputView = {
  printResultString() {
    Console.print('\n실행 결과');
  },

  printRaceResult(cars) {
    cars.forEach((car) =>
      Console.print(
        `${car.getName()} : ${ParseResult.parseRaceResult(car.getPosition())}`
      )
    );
    Console.print('');
  },

  printFinalWinner(cars) {
    Console.print(`최종 우승자 : ${ParseResult.parseWinnerResult(cars).join(', ')}`);
    Console.close();
  },
};

module.exports = OutputView;
