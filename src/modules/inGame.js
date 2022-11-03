const MissionUtils = require('@woowacourse/mission-utils');
const { isThreeRandomNumbers, isNotZeroInInputAndNotDoubleNum } = require('./valid');

function inGame(generateThreeRandomNums) {
  const computerNum = generateThreeRandomNums;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    console.log(answer);
  })
}

exports.inGame = inGame;
