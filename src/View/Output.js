const { Console } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE } = require('../Constants/constant');

class Output {
  printStart() {
    return Console.print(MESSAGE.start);
  }

  printEnd() {
    return Console.print(MESSAGE.end);
  }

  printResult(strike, ball) {
    if (strike === GAME.zeroNum && ball === GAME.zeroNum) {
      return Console.print(MESSAGE.nothing);
    }
    if (ball === GAME.zeroNum) {
      return Console.print(`${strike}${MESSAGE.strike}`);
    }
    if (strike === GAME.zeroNum) {
      return Console.print(`${ball}${MESSAGE.ball}`);
    } 
    return Console.print(`${ball}${MESSAGE.ball} ${strike}${MESSAGE.strike}`);
  }

  close() {
    return Console.close();
  }
};

module.exports = Output;
