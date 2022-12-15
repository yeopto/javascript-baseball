const { Random } = require('@woowacourse/mission-utils');
const { GENERATOR } = require('../Constants/constant');

class NumGenerator {
  static generateNum() {
    const computerNum = [];
    while (computerNum.length < GENERATOR.maxNumLength) {
      const number = Random.pickNumberInRange(GENERATOR.startNum, GENERATOR.endNum);
      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    }
    return computerNum;
  }
};

module.exports = NumGenerator;
