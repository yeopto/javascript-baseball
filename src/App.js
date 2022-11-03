const { gameStart, generateThreeRandomNums } = require('./modules/gameStart');
const { inGame } = require('./modules/inGame');

function App() {
  this.play = () => {
    gameStart();
    inGame(generateThreeRandomNums());
  };
}

const app = new App();
app.play();

module.exports = App;
