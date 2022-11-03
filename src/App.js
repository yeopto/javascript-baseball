const { gameStart } = require('./modules/gameStart');

function App() {
  this.play = () => {
    gameStart();
  };
}

const app = new App();
app.play();

module.exports = App;
