const MissionUtils = require('@woowacourse/mission-utils');
const {
  isThreeRandomNumbers,
  isNotZeroInInputAndNotDoubleNum,
} = require('./valid');
const { compareInputNum } = require('./compareNums');

function gameFirstStart() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

exports.gameFirstStart = gameFirstStart; 

function baseBallGame(computerNums) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInputNums) => {
    if (!isThreeRandomNumbers(userInputNums) || !isNotZeroInInputAndNotDoubleNum(userInputNums)) throw '잘못된 입력입니다.';
    console.log(compareInputNum(computerNums, userInputNums));
    if (computerNums !== userInputNums) baseBallGame(computerNums);
  });
}

exports.baseBallGame = baseBallGame;
