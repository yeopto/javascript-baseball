const { Console } = require('@woowacourse/mission-utils');
const { 
  MESSAGE, 
  ERROR_MESSAGE, 
  INPUTNUM,
  GAME,
} = require('../Constants/constant');

class Input {
  getUserInput(question, callback) {
    Console.readLine(question, (input) => {
      callback(input);
    });
  }

  readNumInput(callback) {
    this.getUserInput(
      MESSAGE.numInput,
      callback,
    );
  }

  readRetryOrQuit(callback) {
    this.getUserInput(
      MESSAGE.retryInput,
      callback,
    );
  }

  checkUserNum(userInput) {
    const inputToNum = +userInput;
    const inputArr = userInput.split(GAME.blank);
    if (
      !(inputToNum >= INPUTNUM.start && inputToNum <= INPUTNUM.end)
      || inputArr.includes(INPUTNUM.zero)
      || inputArr[INPUTNUM.first] === inputArr[INPUTNUM.second]
      || inputArr[INPUTNUM.second] === inputArr[INPUTNUM.third]
      || inputArr[INPUTNUM.first] === inputArr[INPUTNUM.third]
      || !(inputToNum % GAME.oneNum === GAME.zeroNum)
    ) throw new Error(ERROR_MESSAGE.userNum);
  }

  checkRetryInput(userInput) {
    if (!(userInput === INPUTNUM.retryNum || userInput === INPUTNUM.quitNum)) {
      throw new Error(ERROR_MESSAGE.retryInput);
    }
  }
};

module.exports = Input;
