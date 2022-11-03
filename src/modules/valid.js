function isInteger(input) {
  return input % 1 === 0;
}

function isThreeRandomNumbers(input) {
  const inputToNum = Number(input);
  if (
    inputToNum === NaN || 
    !isInteger(inputToNum) ||
    !(inputToNum >= 100 && inputToNum <= 999)
  ) return false;
  return true;
}

exports.isThreeRandomNumbers = isThreeRandomNumbers;

function isNotZeroInInputAndNotDoubleNum(input) {
  const inputArr = input.split('');
  let isZero = false;
  inputArr.map((num) => {
    if (num === '0') isZero = true;
  })
  if (isZero) return false;
  if (
    inputArr[0] === inputArr[1] ||
    inputArr[1] === inputArr[2] ||
    inputArr[0] === inputArr[2]
    ) return false;
  return true;
}

exports.isNotZeroInInputAndNotDoubleNum = isNotZeroInInputAndNotDoubleNum;
