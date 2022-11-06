const MissionUtils = require('@woowacourse/mission-utils');
const { isValidNum } = require('./isValidNum');
const { compareInputNum } = require('./compareInputNum');
const { generateRandomNum } = require('./generateRandomNum');

function gameFirstStart() {
  return MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

exports.gameFirstStart = gameFirstStart; 

function baseBallGame(computerNums) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInputNums) => {
    if (!isValidNum(userInputNums)) throw '잘못된 입력입니다.';
    MissionUtils.Console.print(compareInputNum(computerNums, userInputNums));
    if (computerNums !== userInputNums) return baseBallGame(computerNums);
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInputNums) => {
      if (!(userInputNums === '1' || userInputNums === '2')) throw '잘못된 입력입니다.';
      if (userInputNums === '1') return baseBallGame(generateRandomNum());
      MissionUtils.Console.close();
    });
  });
  return;
}

exports.baseBallGame = baseBallGame;
