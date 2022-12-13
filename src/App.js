const GameController = require('./Controller/GameController');

class App {
  play() {
    const gameController = new GameController();
    gameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
