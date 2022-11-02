const MissionUtils = require('@woowacourse/mission-utils');

class GameInit {
  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const gameInit = new GameInit();

exports.gameStart = gameInit.gameStart;
