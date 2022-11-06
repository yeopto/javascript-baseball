const { STRIKE, BALL, NOTHING } = require('../constants');

function countStrike(computerNums, userInputNums) {
  let strikeCount = 0;
  const computerNumsArr = computerNums.split('');
  const userInputNumsArr = userInputNums.split('');

  computerNumsArr.map((num, index) => {
    if (num === userInputNumsArr[index]) strikeCount++;
  });

  return strikeCount;
}

function countBall(computerNums, userInputNums) {
  let ballCount = 0;
  const computerNumsArr = computerNums.split('');
  const userInputNumsArr = userInputNums.split('');

  computerNumsArr.map((num, index) => {
    if (index === 0 && (num === userInputNumsArr[1] || num === userInputNumsArr[2])) ballCount++;
    if (index === 1 && (num === userInputNumsArr[0] || num === userInputNumsArr[2])) ballCount++;
    if (index === 2 && (num === userInputNumsArr[0] || num === userInputNumsArr[1])) ballCount++;
  })

  return ballCount;
}

function compareInputNum(computerNums, userInputNums) {
  const strikeCount = countStrike(computerNums, userInputNums);
  const ballCount = countBall(computerNums, userInputNums);
  
  if (strikeCount === 0 && ballCount === 0) return NOTHING;
  if (ballCount === 0) return `${strikeCount}${STRIKE}`;
  if (strikeCount === 0) return `${ballCount}${BALL}`;
  return `${ballCount}${BALL} ${strikeCount}${STRIKE}`;
}

exports.compareInputNum = compareInputNum;