const MissionUtils = require('@woowacourse/mission-utils');

function generateThreeRandomNums() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) computer.push(number);
  }
  return computer
    .join('')
    .toString();
}

exports.generateThreeRandomNums = generateThreeRandomNums;