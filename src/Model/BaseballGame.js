const { GAME } = require('../Constants/constant');

class BaseballGame {
  #computerNum;

  constructor(computerNum) {
    this.#computerNum = computerNum;
  }

  match(userInput) {
    const userNumArr = userInput.split(GAME.blank).map((num) => +num);
    let correctCount = this.takeCorrectCount(userNumArr);
    let strike = GAME.zeroNum;
    userNumArr.forEach((num, index) => {
      if (this.hasPlace(num, index)) strike += GAME.countOne;
    });
    const ball = correctCount - strike;
    if (strike === GAME.allCorrect) return [true, strike, ball];
    return [false, strike, ball];
  }

  takeCorrectCount(userNumArr) {
    let result = GAME.zeroNum;
    
    userNumArr.forEach((num) => {
      if (this.#computerNum.includes(num)) result += GAME.countOne;
    });

    return result;
  }

  hasPlace(num, index) {
    return this.#computerNum[index] === num;
  }
};

module.exports = BaseballGame;
