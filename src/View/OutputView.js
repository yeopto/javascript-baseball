const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printResultString() {
    Console.print('\n실행 결과');
  },
  
  printResult(cars) {
    cars.forEach((car) =>
      Console.print(
        `${car.getName()} : ${this.parsePosition(car.getPosition())}`
      )
    );
    Console.print('');
  },

  parsePosition(count) {
    const position = [];

    for (let i = 0; i < count; i++) {
      position.push('-');
    }

    return position.join('');
  },

  printWinner(cars) {
    const result = [];
    let winner = [];
    cars.forEach((car) => result.push([car.getName(), car.getPosition()]));
    result.sort((a, b) => b[1] - a[1]);
    const max = result[0][1];
    const winnerArr = result.filter((el) => max === el[1]);
    winnerArr.forEach((el) => winner.push(el[0]));
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
    Console.close();
  },
};

module.exports = OutputView;
