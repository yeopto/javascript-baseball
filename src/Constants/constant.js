const GAME = {
  blank: '',
  zeroNum: 0,
  oneNum: 1,
  countOne: 1,
  allCorrect: 3,
};

const INPUTNUM = {
  start: 100,
  end: 999,
  zero: '0',
  first: 0,
  second: 1,
  third: 2,
  retryNum: '1',
  quitNum: '2',
};

const GENERATOR = {
  maxNumLength: 3,
  startNum: 1,
  endNum: 9,
};

const MESSAGE = {
  numInput: '숫자를 입력해주세요 : ',
  retryInput: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  start: '숫자 야구 게임을 시작합니다.',
  end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  nothing: '낫싱',
  strike: '스트라이크',
  ball: '볼',
};

const ERROR_MESSAGE = {
  userNum: '[ERROR] 올바르게 입력해주세요.',
  retryInput: '[ERROR] 1또는 2를 입력해주세요.',
};

module.exports = {
  GAME,
  INPUTNUM,
  GENERATOR,
  MESSAGE,
  ERROR_MESSAGE,
};