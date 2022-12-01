const NumGenerator = require('../Model/NumGenerator');
const BaseballGame = require('../Model/BaseballGame');
const { INPUTNUM } = require('../Constants/constant');

class GameController {
  #input;
  #output;
  #baseballGame;
  
  constructor(input, output) {
    this.#input = input;
    this.#output = output;
  }

  gameStart() {
    this.#output.printStart();
    this.startGame();
  }

  startGame() {
    this.generateRandomNum();
    this.getUserNum();
  }
  
  generateRandomNum() {
    const computerNum = NumGenerator.generateNum();
    this.#baseballGame = new BaseballGame(computerNum);
  }

  getUserNum() {
    this.#input.readNumInput((userInput) => {
      this.#input.checkUserNum(userInput);
      const [gameEndBoolean, strike, ball] = this.#baseballGame.match(userInput);
      this.#output.printResult(strike, ball);
      if (gameEndBoolean) return this.getRestartOrQuit();
      return this.getUserNum();
    });
  }

  getRestartOrQuit() {
    this.#output.printEnd();
    this.#input.readRetryOrQuit((userInput) => {
      this.#input.checkRetryInput(userInput);
      if (userInput === INPUTNUM.retryNum) return this.startGame();
      return this.#output.close();
    });
  }
};

module.exports = GameController;
