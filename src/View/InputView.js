const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  getUserInput(question, callback, redirect) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
        redirect(callback);
      }
    });
  },

  readCarName(callback) {
    this.getUserInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      callback,
      this.readCarName.bind(this),
    );
  },

  readTryCount(callback) {
    this.getUserInput(
      '시도할 회수는 몇회인가요?\n',
      callback,
      this.readTryCount.bind(this),
    );
  },
};

module.exports = InputView;
