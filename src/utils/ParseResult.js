const ParseResult = {
  parseRaceResult(count) {
    const position = [];

    for (let i = 0; i < count; i++) {
      position.push('-');
    }

    return position.join('');
  },

  parseWinnerResult(cars) {
    const result = [];
    let winner = [];
    cars.forEach((car) => result.push([car.getName(), car.getPosition()]));
    result.sort((a, b) => b[1] - a[1]);
    const max = result[0][1];
    const winnerArr = result.filter((el) => max === el[1]);
    winnerArr.forEach((el) => winner.push(el[0]));

    return winner;
  }
};

module.exports = ParseResult;
