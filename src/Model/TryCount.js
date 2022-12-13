class TryCount {
  #count;

  constructor(count) {
    this.validate(count);
    this.#count = count;
  }
  
  validate(count) {
    if (isNaN(Number(count))) {
      throw new Error('[ERROR] 시도 횟수는 숫자여야한다.');
    }
  }

  getTryCount() {
    return this.#count;
  }
}

module.exports = TryCount;
