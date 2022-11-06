const { gameFirstStart, baseBallGame } = require('./modules/game');
const { generateRandomNum } = require('./modules/generateRandomNum');

function App() {
  this.play = () => {
    gameFirstStart();
    baseBallGame(generateRandomNum());
  };
}

const app = new App();
app.play();

module.exports = App;
