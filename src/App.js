const GameController = require('./Controller/GameController');
const Input = require('./View/Input');
const Output = require('./View/Output');

class App {
  play() {
    this.gameController = new GameController(new Input(), new Output());
    this.gameController.gameStart();
  }
};

const app = new App();
app.play();

module.exports = App;
