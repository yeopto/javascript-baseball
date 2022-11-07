const { isValidNum } = require('../src/modules/isValidNum');

describe("기능 TEST", () => {
  test('사용자 입력 숫자 유효한지 판단하는 기능', () =>  {
    const input = ['234', '1234', '1', 'a', '12', '222', '1.33', '130'];
    const correctAnswer = input.filter((el) => isValidNum(el));

    expect(correctAnswer).toEqual(['234']);
  });
});