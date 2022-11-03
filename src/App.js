const { generateThreeRandomNums } = require('./modules/generateNums');
const { gameFirstStart, baseBallGame } = require('./modules/game');
const MissionUtils = require('@woowacourse/mission-utils');

function App() {
  this.play = () => {
    gameFirstStart();
    baseBallGame(generateThreeRandomNums());
  };
}

const app = new App();
app.play();

module.exports = App;
